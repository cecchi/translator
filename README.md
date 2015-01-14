# translator
A simple translation class, querying Google Translate via YQL


### Methods

#### `.from(String language)`
Set the source language. Must be a valid [language code](https://cloud.google.com/translate/v2/using_rest#language-params) or `auto`. Defaults to `auto`.

#### `.to(String language)`
Set the target language. Must be a valid [language code](https://cloud.google.com/translate/v2/using_rest#language-params). Defaults to `en`.

#### `.translate(String text, Function callback)`
Asynchronously ranslates the given `text` to the target language. The callback is invoked with two parameters: `error` (or `null`), and the translated text.
