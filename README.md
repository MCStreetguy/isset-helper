# Isset Helper

**A tiny helper method for Javascript, checking a variable for existence.**

Since checking variable types and existence always has been painful in Javascript, validation conditions normally are exhausting.
This module solves this definitely.

---

## Installation

### as a module

Install the library through your preferred package manager:

``` bash
$ npm install --save isset-helper
# or
$ yarn add isset-helper
```

Then you can require the module as usual:

``` JavaScript
const isset = require('isset-helper');
```

### in the browser

Include _one_ of the following script tags in your pages head:

``` html
<script src="https://cdn.jsdelivr.net/npm/isset-helper@2/dist/isset.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/mcstreetguy/isset-helper@2/dist/isset.min.js"></script>
<script src="https://bundle.run/isset-helper@2/dist/isset.min.js"></script>
<script src="https://unpkg.com/isset-helper@2/dist/isset.min.js"></script>
```

The library registers the `isset` function automatically on the `window` object.

## Usage

``` JavaScript
isset(variable, type);
```

`variable` can be anything. It's value is going to be checked.  
`type` can be a string, class or even left out.

The algorithm follows the subsequent rules:  
1. `variable` is not `null`
2. `variable` is not `undefined`
3. If `type` is a string, `typeof variable` has to match `type`
4. Otherwise, `variable` has to match `instanceof type`
5. If `type` is `"string"`, `variable` is not an empty string

**Please notice:**  

- The algorithm always runs the `instanceof`-check, leaving it out of consideration if the check produces any error.
- The algorithm doesn't check for the exact value (apart from the empty string case mentioned above), thus `false` will also be considered valid.

## Contributing

If, contrary to expectations, you find an error in the function, please report it to the Issues page.

## License

This library is licensed under the MIT License.
You may find [a copy of the license](/blob/master/LICENSE) at the root of the project source.