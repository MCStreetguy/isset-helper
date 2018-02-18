# Isset Helper
**A tiny helper method for Javascript, checking a variable for existence.**

Since checking variable types and existence always has been painful in Javascript, validation conditions normally are exhausting.
This module solves this definitely.   

---

## Installation

```
$ npm install --save isset-helper
# or
$ yarn add isset-helper
```

## Require

```JavaScript
const isset = require('isset-helper');
```

or if you prefer a more object-oriented usage of this method:

```JavaScript
const Util = {
  isset: require('isset-helper')
}
```

## Usage

```JavaScript
isset(variable,type) {}
// or
Util.isset(variable,type) {}
```

`variable` can be anything. It's value is going to be checked.    
`type` can be a string, class or even left empty.

The algorithm follows the subsequent rules:   
1. `variable` is not `null`
2. `variable` is not `undefined`
3. If `type` is a string, `typeof variable` has to match `type`
4. Otherwise, `variable` has to match `instanceof type`
5. If `type` is `"string"`, `variable` is not an empty string

**Please notice:**    
- The algorithm always runs the `instanceof`-check, leaving it out of consideration if the check runs in any error.
- The algorithm doesn't check for the exact value (apart from the empty string case mentioned above), thus `false` will also be considered valid.

## Examples
### Form validation
_(Example below use jQuery syntax for simplification. It's not required for the helper to work!)_

```JavaScript
$('#myform').on('submit',function (event) {
  var user = $(this).find('#username').val()
  if(!Util.isset(user,'string')) return false

  var pass = $(this).find('#password').val()
  if(!Util.isset(pass,'string')) return false
})
```

### Constructor validation
```JavaScript
class House {...}

class Person {
  constructor(name,age,house) {
    if(Util.isset(name,'string')) {
      this.name = name;
    } else {
      throw new Error('Person constructor is missing required argument: name')
    }

    if(Util.isset(age,'number')) {
      this.age = age;
    } else {
      throw new Error('Person constructor is missing required argument: age')
    }

    if(Util.isset(house,House)) {
      this.house = house;
    } else {
      throw new Error('Person constructor is missing required argument: house')
    }
  }
}
```
