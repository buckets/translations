import { readFileSync } from 'fs'
import * as Path from 'path'
import * as ts from "typescript"

// XXX this doesn't actually work yet


function openFile(relpath:string):ts.SourceFile {
  let filename = Path.join(__dirname, relpath);
  return ts.createSourceFile(filename,
    readFileSync(filename).toString(),
    ts.ScriptTarget.ES2016);
}

function copyMissing(fromsrcFile:ts.SourceFile, tosrcFile:ts.SourceFile):ts.SourceFile {
  console.log('copyMissing', fromsrcFile.fileName, tosrcFile.fileName)
  console.log(fromsrcFile);
  console.log(tosrcFile);

  function processNode(node: ts.Node) {
    console.log('processNode', node);
    switch (node.kind) {

    }
    ts.forEachChild(node, processNode);
  }
  processNode(fromsrcFile);
  return null;
}

const en = openFile('./en.tsx');

const es = openFile('./es.tsx');

copyMissing(en, es);
