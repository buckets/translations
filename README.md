This is the repository of translations for the [Buckets budgeting app](https://www.budgetwithbuckets.com/).  Some languages are officially supported, but contributions for other languages are very welcome.

# Current language support

<!-- trans stats start -->
| AI Translated | Human Translated | Language | Code |
|--------------:|-----------------:|----------|------|
|          100% |               0% | العربية | ar |
|          100% |              44% | Беларуская | be |
|          100% |              99% | Български | bg |
|          100% |               3% | čeština | cs |
|          100% |               3% | Dansk | da |
|          100% |              86% | Deutsch | de |
|          100% |             100% | English | en |
|          100% |              75% | Español | es |
|          100% |              98% | Eesti | et |
|          100% |              64% | Français | fr |
|          100% |               0% | עִברִית | he |
|           99% |              37% | Magyar | hu |
|          100% |              48% | Italiano | it |
|           99% |               0% | 한국어 | ko |
|           99% |              77% | Norsk | nb |
|          100% |              61% | Nederlands | nl |
|          100% |              58% | Polski | pl |
|          100% |              92% | Português | pt |
|          100% |              98% | Română | ro |
|          100% |              22% | Русский | ru |
|          100% |              65% | Svenska | sv |
|          100% |              24% | Türkçe | tr |
|          100% |              30% | Українська | uk |
<!-- trans stats end -->

# How to contribute

1. Look for your language in [/langs](/langs).
1. If your language isn't there:
   1. Click the `Create new file` button.
   1. Copy the contents of [/langs/en.tsx](/langs/en.tsx) into the new file
   1. Name your file according to the [2-letter 639-1 code listed here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) with `.tsx` at the end (e.g. `en.tsx` for English)

1. Edit the language file.  For each item:
   1. Either translate the `val: ...` part if `translated: false` or verify/fix the translation if `translated: "auto"`
   1. Change `translated: ...` to `translated: true`
   1. Look at any comments of this format: `/*! This is a comment for the translator */`
   1. **If there isn't enough context** for you to translate it accurately (e.g. "Is this a noun?" or "What noun does this adjective refer to so its gender can agree?") email me or file an issue.


1. Submit a pull request (even if you only translate a few things).

1. Optionally, [subscribe here to be notified when there's more to translate.](https://github.com/buckets/translations/issues/31)

If you're familiar with GitHub or you prefer, you can also fork this repo, clone it and edit the file on your computer.  All I'm really looking for is a Pull Request.
