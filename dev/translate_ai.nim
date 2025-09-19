import std/httpclient
import std/json
import std/strutils
import std/strformat
import std/times
import std/os

import termtools

initTermTools()
addQuitProc proc() {.noconv.} =
  deinitTermTools()

let
  GROK_APIKEY = getEnv("GROK_APIKEY")
  OPENAI_APIKEY = getEnv("OPENAI_APIKEY")

type
  FileComponentKind = enum
    Literal
    Item
  FileComponent = object
    case kind: FileComponentKind
    of Literal:
      literal_text: string
    of Item:
      context_comments: seq[string]
      val: string
      translated: TranslatedOption
  
  TranslatedOption = enum
    NotTranslated
    Translated
    AutoTranslated

  ParseState = enum
    Init
    InsideMessages
    InsideItem
    InsideVal

proc parseTranslated*(s: string): TranslatedOption =
  if "false" in s:
    NotTranslated
  elif "true" in s:
    Translated
  elif "auto" in s:
    AutoTranslated
  else:
    raise newException(ValueError, &"Cannot parse translated value: {s}")

iterator fileParts*(filename: string): FileComponent =
  var state: ParseState = Init
  var latestKey = ""
  var latestVal = ""
  var latestComments = newSeq[string]()
  var latestTranslated = NotTranslated
  for line in open(filename).lines:
    let stripped = line.strip()
    # stderr.writeLine(&"LINE: {state} -->{line}<--")
    case state
    of Init:
      yield FileComponent(kind: Literal, literal_text: line & "\n")
      if stripped.startsWith("const messages"):
        state = InsideMessages
    of InsideMessages:
      yield FileComponent(kind: Literal, literal_text: line & "\n")
      if stripped.endsWith("{"):
        latestKey = stripped
        latestVal = ""
        latestComments.setLen(0)
        latestTranslated = NotTranslated
        state = InsideItem
      elif line == "}":
        state = Init
    of InsideItem:
      if stripped.startsWith("/*"):
        yield FileComponent(kind: Literal, literal_text: line & "\n")
        latestComments.add line
      elif stripped.startsWith("val:"):
        let parts = line.split(": ", maxsplit=1)
        latestVal = parts[1] & "\n"
        state = InsideVal
    of InsideVal:
      if stripped.startsWith("translated:"):
        latestTranslated = parseTranslated(stripped)
        yield FileComponent(kind: Item,
          context_comments: latestComments,
          val: latestVal,
          translated: latestTranslated
        )
        state = InsideMessages
      else:
        latestVal.add line & "\n"

proc render(comp: FileComponent): string =
  case comp.kind
  of Literal:
    result = comp.literal_text
  of Item:
    result.add "    val: " & comp.val.strip(leading=false) & "\n"
    result.add "    translated: "
    case comp.translated
      of NotTranslated: result.add "false"
      of Translated: result.add "true"
      of AutoTranslated: result.add "'auto'"
    result.add ",\n"

const PROMPT = """
Translate the following into {langname}. 

If it looks like a JavaScript function, translate only the string literals inside the function, leaving the code as-is.

JavaScript-style comments give context to the translators. Use them, but don't translate them and omit them in the response.

For RTL languages, make sure the text (including trailing or leading punctuation) is in logical order, not visual order.

Return the translation without any explanation in exactly the same format as was given, with surrounding quotes and commas (especially for functions). No triple backticks or extra whitespace.
"""

proc sendToGrok(langname: string, x: string): string =
  let this_prompt = fmt(PROMPT)
  # stderr.writeLine(&"Instruction prompt: {this_prompt}")
  let payload = %* {
    "messages": [
      {"role": "system", "content": this_prompt},
      {"role": "user", "content": x},
    ],
    "model": "grok-3-mini",
    "stream": false,
    "temperature": 0,
    # "response_format": {"type": "json_object"},
  }
  if GROK_APIKEY == "":
    raise ValueError.newException("No GROK_APIKEY")
  var client = newHttpClient()
  defer: client.close()
  client.headers = newHttpHeaders({
    "Content-Type": "application/json",
    "Authorization": &"Bearer {GROK_APIKEY}",
  })
  let response = client.postContent("https://api.x.ai/v1/chat/completions", body = $payload)
  return try:
      parseJson(response){"choices"}[0]{"message"}{"content"}.getStr()
    except:
      stderr.writeLine(&"Error getting response: {response} err={getCurrentExceptionMsg()}")
      ""

proc sendToChatGPT(langname: string, x: string): string =
  let this_prompt = fmt(PROMPT)
  # stderr.writeLine(&"Instruction prompt: {this_prompt}")
  let payload = %* {
    "messages": [
      {"role": "system", "content": this_prompt},
      {"role": "user", "content": x},
    ],
    "model": "gpt-4o",
    "response_format": {"type": "json_object"},
  }
  if OPENAI_APIKEY == "":
    raise ValueError.newException("No OPENAI_APIKEY")
  var client = newHttpClient()
  defer: client.close()
  client.headers = newHttpHeaders({
    "Content-Type": "application/json",
    "Authorization": &"Bearer {OPENAI_APIKEY}",
  })
  let response = client.postContent("https://api.openai.com/v1/chat/completions", body = $payload)
  return try:
      parseJson(response){"choices"}[0]{"message"}{"content"}.getStr()
    except:
      stderr.writeLine(&"Error getting response: {response} err={getCurrentExceptionMsg()}")
      ""

proc translate*(langname: string, typescript: string): string =
  sendToGrok(langname, typescript)
  # sendToChatGPT(langname, typescript)

proc ensureTranslatedFormat*(x: string): string =
  result = x
  if "=>" in x:
    # function
    if not x.strip().endsWith(","):
      result.add ","
  else:
    if not x.startsWith("\""):
      result = "\"" & x & "\""
    if not x.endsWith(","):
      result.add ","

var keepGoing = true
proc handleControlC() {.noconv.} =
  if keepGoing:
    keepGoing = false
    stderr.writeLine(fgColor("\nStopping due to ctrl-C. Wait until the current translation finishes.", "#ff4444"))
  else:
    stderr.writeLine(fgColor("\nExiting immediately due to second ctrl-C.", "#ff4444"))
    quit(1)

proc translateFile(filename: string, in_place = false) =
  var res = ""
  let guts = readFile(filename)
  var langname = ""
  for line in guts.split("\n"):
    if line.strip().startsWith("name: "):
      langname = line.split(": ")[1].split(',')[0][1..^2]
  stderr.writeLine(fmt("langname: -->{langname}<--"))

  let outp = filename & ".translated"
  let outf = open(outp, fmWrite)
  proc emit(x: string) =
    outf.write x
    outf.flushFile()
    echo x.strip(leading=false)
  for part in fileParts(filename):
    case part.kind
    of Literal:
      emit part.render()
    else:
      if keepGoing and part.translated == NotTranslated:
        var toTranslate = ""
        for c in part.context_comments:
          toTranslate.add c & "\n"
        toTranslate.add part.val
        stderr.write(faint("Translating..."))
        stderr.flushFile()
        let start = getTime()
        try:
          let translated = translate(langname, toTranslate).ensureTranslatedFormat()
          let elapsed = getTime() - start
          stderr.writeLine(faint(fmt"{elapsed.inSeconds()}s"))
          emit FileComponent(
            kind: Item,
            context_comments: part.context_comments,
            val: translated,
            translated: AutoTranslated
          ).render()
        except:
          stderr.writeLine(fgColor("ERROR during translation: " & getCurrentExceptionMsg(), "#ff4444"))
          emit part.render()
      else:
        emit part.render()

when isMainModule:
  import cligen
  setControlCHook(handleControlC)
  dispatch translateFile
