ANSI to Unicode Armenian text converter

## Install

```sh
npm install --save ansi-to-unicode-armenian
```


## Usage

```js
var ansiToUnicodeConverter = require('ansi-to-unicode-armenian');

const ansi = 'µ³ñ»õ ³ßË³ñÑ';

const unicode = ansiToUnicodeConverter.toUnicode(ansi);
console.log(unicode); //բարեւ աշխարհ

const ansiReverseConverted = ansiToUnicodeConverter.toUnicode(unicode);
console.log(ansiReverseConverted); //µ³ñ»õ ³ßË³ñÑ

```

## Source

[Armenian Unicode Converter](http://unicodenow.com/)
