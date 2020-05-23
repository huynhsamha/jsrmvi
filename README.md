# js-remove-vietnamese

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

Convert Vietnamese words to Latin alphabet - Use for both Node.JS and Browser.

## Installation

### NodeJS

`$ npm install --save js-remove-vietnamese`

or

`$ yarn add js-remove-vietnamese`

### Browser

Download `jsrmvi.min.js` at [here]() or use script tag

```html
```

## Usage

### Node.JS

```js
const { removeVI, DefaultOption } = require('js-remove-vietnamese');

// Default options for function removeVI()
console.log(DefaultOption);
/*
{
  ignoreCase: true,
  replaceSpecialCharacters: true,
  concatBy: '-'
}
*/
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

You can see more examples in directory ['./test/node/index.js'](`test/node/index.js`)

#### Browser

```html
<!-- object `jsrmvi` will be exported globally to window object -->
<script src="[path/to/dist]/jsrmvi.min.js"></script>

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

Examples are similar with NodeJS. You can try with [`./test/browser/index.html`](`test/browser/index.html`) on browser.

Output on browser:

<img src="./assets/img/browser.png" alt="Browser result">


##### 1. NPM Package

```html
<script src="./node_modules/js-remove-vietnamese/dist/js-remove-vietnamese.js"></script>
<!-- Or use minified -->
<script src="./node_modules/js-remove-vietnamese/dist/js-remove-vietnamese.min.js"></script>
```

##### 2. Download from source

```html
<script src="[path/to/dist]/js-remove-vietnamese.[min.]js"></script>
```

##### Usage

```html
<script>

</script>
```

## API

### ...

Returns ...


## Dependencies

No dependencies

[npm-image]: https://img.shields.io/npm/v/js-remove-vietnamese.svg?style=flat
[npm-url]: https://www.npmjs.com/package/js-remove-vietnamese
[downloads-image]: https://img.shields.io/npm/dm/js-remove-vietnamese.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/js-remove-vietnamese


## Development

### Quickstart

+ Clone the repository and enter the project

```bash
git clone https://github.com/huynhsamha/js-remove-vietnamese.git
cd js-remove-vietnamese
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

*Requirement: package is built for Node*

+ Build dist (both Node and Browser)

```bash
yarn dist  # defined in package.json
```

### Testing

In directory `test`, we can test in environments NodeJS and Browser.

File ['./test/node/index.js'](`test/node/index.js`) : test for NodeJS.

File [`./test/browser/index.html`](`test/browser/index.html`): test on Browser.
