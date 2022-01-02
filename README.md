# IsSet Helper

[![GitHub open issues](https://img.shields.io/github/issues/MCStreetguy/isset-helper)](https://github.com/MCStreetguy/isset-helper/issues)
[![GitHub license](https://img.shields.io/github/license/MCStreetguy/isset-helper)](https://github.com/MCStreetguy/isset-helper/blob/master/LICENSE)
![npm total downloads](https://img.shields.io/npm/dt/isset-helper)
![latest version](https://img.shields.io/npm/v/isset-helper?label=latest)
![module size in bytes](https://img.shields.io/github/size/MCStreetguy/isset-helper/dist/module.umd.js?label=module%20size)
![minified size in bytes](https://img.shields.io/github/size/MCStreetguy/isset-helper/dist/isset.min.js?label=minified%20size)

**Get rid of weak typing and improve your assertions: A tiny helper method for Javascript**

Since checking variable types and existence always has been painful in Javascript, validation assertions normally are exhausting to write.
This module solves this definitely.

- [IsSet Helper](#isset-helper)
  - [Browser Compatibility](#browser-compatibility)
  - [Installation](#installation)
    - [as a module](#as-a-module)
    - [in the browser](#in-the-browser)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

---

## Browser Compatibility

| IE | Edge | Firefox | Chrome | Safari | Opera | Node.js |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 9+ | 12+ | 4+ | 5+ | 5+ | 11.5+ | all |

## Installation

### as a module

Install the library through your preferred package manager:

```bash
$ npm install --save isset-helper
# or
$ yarn add isset-helper
```

Then you can require the module as usual:

```js
const isset = require('isset-helper');
```

### in the browser

Include _one_ of the following script tags in your pages head:

```html
<script src="https://cdn.jsdelivr.net/npm/isset-helper@4/dist/isset.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/mcstreetguy/isset-helper@4/dist/isset.min.js"></script>
<script src="https://bundle.run/isset-helper@4.0/dist/isset.min.js"></script>
<script src="https://unpkg.com/isset-helper@4/dist/isset.min.js"></script>
```

The library registers the `isset` function automatically on the `window` object.

## Usage

```js
isset(variable, type);
```

`variable` can be anything, it's value is going to be checked.
`type` can be a string, object constructor or even be omitted.

The algorithm follows the subsequent rules:

1. `variable` is not `null`
2. `variable` is not `undefined`
3. If `type` is a string, `typeof variable` has to match `type`,
   otherwise `variable` has to match `instanceof type`
4. If `type` is `"string"`, the length of `variable` is greater than zero
5. If `type` is `"array"`, `variable` has to pass the [`Array.isArray()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) check
6. If `type` is `"integer"`, `variable` has to pass the [`Number.isInteger()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) check
7. If `type` is `"float"` or `"double"`, the inverse of rule 6 applies ([`Number.isInteger()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) has to return `false`)

**Please notice:**

- The algorithm doesn't check for the exact value (apart from the empty string case mentioned above), thus `false`, `0` and other "falsy" values will also be considered valid.

## Contributing

If, contrary to expectations, you find an error in the function, please report it to the Issues page.
Feel free to make changes to a fork yourself and propose a detailed pull request when finished.

## License

This library is licensed under the MIT License.
You may find [a copy of the license](/LICENSE) at the root of the project source.
