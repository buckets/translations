This is the repository of translations for the [Buckets budgeting app](https://www.budgetwithbuckets.com/).  Some languages are officially supported, but contributions for other languages are very welcome.

# Current language support

<!-- trans stats start -->
| AI Translated | Human Translated | Language | Code |
|--------------:|-----------------:|----------|------|
|           98% |               0% | العربية | ar |
|           98% |              43% | Беларуская | be |
|           98% |              97% | Български | bg |
|           98% |               3% | čeština | cs |
|           98% |               3% | Dansk | da |
|           98% |              84% | Deutsch | de |
|          100% |             100% | English | en |
|           98% |              74% | Español | es |
|           98% |              96% | Eesti | et |
|           98% |              63% | Français | fr |
|           98% |               0% | עִברִית | he |
|           98% |              37% | Magyar | hu |
|           98% |              48% | Italiano | it |
|           98% |               0% | 한국어 | ko |
|           98% |              76% | Norsk | nb |
|           98% |              60% | Nederlands | nl |
|           98% |              57% | Polski | pl |
|           98% |              90% | Português | pt |
|           98% |              97% | Română | ro |
|           98% |              21% | Русский | ru |
|           98% |              63% | Svenska | sv |
|           98% |              24% | Türkçe | tr |
|           98% |              29% | Українська | uk |
|           96% |               0% | 简体中文 | zh |
<!-- trans stats end -->

# How to contribute

1. Look for your language in [/langs](/langs).
1. If your language isn't there, [submit an issue](https://github.com/buckets/translations/issues/new/choose) to add it. We'll do an initial AI-based translation.
1. Edit the language file.  For each item:
   1. Either translate the `val: ...` part if `translated: false` or verify/fix the translation if `translated: "auto"`
   1. Change `translated: ...` to `translated: true`
   1. Look at any comments of this format: `/*! This is a comment for the translator */`
   1. **If there isn't enough context** for you to translate it accurately (e.g. "Is this a noun?" or "What noun does this adjective refer to so its gender can agree?") email me or file an issue.


1. Submit a pull request (even if you only translate/verify a few things).

1. Optionally, [subscribe here to be notified when there's more to translate.](https://github.com/buckets/translations/issues/31)

If you're familiar with GitHub or you prefer, you can also fork this repo, clone it and edit the file on your computer.  All I'm really looking for is a Pull Request.
