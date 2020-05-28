# jsrmvi

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

🇻🇳 Convert Vietnamese words to Latin alphabet 🇻🇳 Use for both Node.JS and Browser.

## Installation

### NodeJS

```bash
npm install --save jsrmvi
# or
yarn add jsrmvi
```

### Browser

Download `jsrmvi.min.js` at [here](https://unpkg.com/jsrmvi/dist/jsrmvi.min.js) or use script tag

```html
<script src="https://unpkg.com/jsrmvi/dist/jsrmvi.min.js"></script>
<!-- or -->
<script src="[path/to/dist]/jsrmvi.min.js"></script>
```

## Usage

### Node.JS

#### Syntax `require()`

```js
const jsrmvi = require('jsrmvi');
const { removeVI, DefaultOption } = jsrmvi;
// or
const { removeVI, DefaultOption } = require('jsrmvi');

// Default option used in function removeVI()
console.log(DefaultOption);
/*
{
  ignoreCase: true,
  replaceSpecialCharacters: true,
  concatBy: '-'
}
*/
```

#### Syntax `import`

```js
import jsrmvi from 'jsrmvi';
const { removeVI, DefaultOption } = jsrmvi;
// or
import { removeVI, DefaultOption } from 'jsrmvi';
```

#### Example for a vietnamese sentence:

```js
const text01 = 'Không người thân, một mình chiến đấu với Covid-19, nam phi công người Anh chấp nhận hôn mê, đặt trọn niềm tin vào bác sĩ Việt Nam.';
console.log('Sentence');
console.log(text01);
console.log(removeVI(text01));
console.log(removeVI(text01, { ignoreCase: false }));
console.log(removeVI(text01, { ignoreCase: false, replaceSpecialCharacters: false }));
console.log(removeVI(text01, { concatBy: '+' }));
console.log(removeVI(text01, { replaceSpecialCharacters: false }));
/*
Sentence
Không người thân, một mình chiến đấu với Covid-19, nam phi công người Anh chấp nhận hôn mê, đặt trọn niềm tin vào bác sĩ Việt Nam.
khong-nguoi-than-mot-minh-chien-dau-voi-covid-19-nam-phi-cong-nguoi-anh-chap-nhan-hon-me-dat-tron-niem-tin-vao-bac-si-viet-nam
Khong-nguoi-than-mot-minh-chien-dau-voi-Covid-19-nam-phi-cong-nguoi-Anh-chap-nhan-hon-me-dat-tron-niem-tin-vao-bac-si-Viet-Nam
Khong nguoi than, mot minh chien dau voi Covid-19, nam phi cong nguoi Anh chap nhan hon me, dat tron niem tin vao bac si Viet Nam.
khong+nguoi+than+mot+minh+chien+dau+voi+covid+19+nam+phi+cong+nguoi+anh+chap+nhan+hon+me+dat+tron+niem+tin+vao+bac+si+viet+nam
khong nguoi than, mot minh chien dau voi covid-19, nam phi cong nguoi anh chap nhan hon me, dat tron niem tin vao bac si viet nam.
*/
```

#### Options

In `TypeScript`, we define interface `Options`:

```ts
interface Options {
	ignoreCase: boolean;
	replaceSpecialCharacters: boolean;
	concatBy: string;
}
```

+ `ignoreCase`: convert all uppercase characters to lowercase. Default is `true`.
+ `replaceSpecialCharacters`: replace all special characters to `concatBy` character. Default is `true`.
+ `concatBy`: character we want to replace special characters. Default is `-`.


#### More examples

You can see more examples in directory [`./test/node/src/es5.js`](./test/node/src/es5.js)

### Browser

After load file `jsrmvi.min.js`, object `jsrmvi` will be exported globally to window object. We can access `jsrmvi` by `window.jsrmvi` or `jsrmvi` directly.

```html
<script src="https://unpkg.com/jsrmvi/dist/jsrmvi.min.js"></script>

<script>
	const { removeVI, DefaultOption } = jsrmvi;

	console.log(jsrmvi);
	console.log(DefaultOption);

	const text01 = 'Không người thân, một mình chiến đấu với Covid-19, nam phi công người Anh chấp nhận hôn mê, đặt trọn niềm tin vào bác sĩ Việt Nam.';
	console.log('Sentence');
	console.log(text01);
	console.log(removeVI(text01));
	console.log(removeVI(text01, { ignoreCase: false }));
	console.log(removeVI(text01, { ignoreCase: false, replaceSpecialCharacters: false }));
	console.log(removeVI(text01, { concatBy: '+' }));
	console.log(removeVI(text01, { replaceSpecialCharacters: false }));
</script>
```

Examples are similar with NodeJS. You can try with [`test/browser/index.html`](./test/browser/index.html) on browser.

Output on browser for examples in file [`test/browser/index.html`](./test/browser/index.html):

<img src="./assets/img/browser.png" alt="Browser result">

## API

### removeVI

**Method**

```ts
removeVI = (text?: string, options?: Options) => string;
```

+ `text`: sentense we want to convert
+ `options`: option we want to convert, can be null

**Return**: `string`, converted sentence.

```ts
interface Options {
	ignoreCase: boolean;
	replaceSpecialCharacters: boolean;
	concatBy: string;
}
```

+ `ignoreCase`: convert all uppercase characters to lowercase. Default is `true`.
+ `replaceSpecialCharacters`: replace all special characters to `concatBy` character. Default is `true`.
+ `concatBy`: character we want to replace special characters. Default is `-`.

## Dependencies

No dependencies

## Development

### Quickstart

+ Clone the repository and enter the project

```bash
git clone https://github.com/huynhsamha/jsrmvi.git
cd jsrmvi
```

+ Install dependencies

```bash
yarn
```

+ Lint and format source (directory `src`)

```bash
yarn format # defined in package.json
yarn lint   # defined in package.json
```

+ Build package for Node

```bash
yarn build  # defined in package.json
```

Output directory is `dist` (defined in file `tsconfig.json`)

+ Build package for Browser

```bash
yarn rollup  # defined in package.json and rollup.config.js
```

*Requirement: before run this command, package needs to build for Node first.*

+ Build dist (both Node and Browser)

```bash
yarn dist  # defined in package.json
```

### Testing

In directory `test`, we can test package in environments NodeJS, Browser and pre-publish NPM package

File [`./test/node/src/es5.js`](./test/node/src/es5.js): test for NodeJS.

File [`./test/browser/index.html`](./test/browser/index.html): test for Browser.

Folder [`./test/npm`](./test/npm): test for pre-publish NPM package. We can run `npm pack` to make tarball file and move this file to the folder for testing.


[npm-image]: https://img.shields.io/npm/v/jsrmvi.svg?style=flat
[npm-url]: https://www.npmjs.com/package/jsrmvi
[downloads-image]: https://img.shields.io/npm/dm/jsrmvi.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/jsrmvi

