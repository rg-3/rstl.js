# rstl.js

1. <a href='#introduction'>Introduction</a>
2. <a href='#examples'>Examples</a>
3. <a href='#install'>Install</a>
4. <a href='#license'>License </a>

[![Build Status](https://travis-ci.org/rg-3/rstl.js.svg?branch=master)](https://travis-ci.org/rg-3/rstl.js)

## <a id='#introduction'>Introduction</a>

Really Small Template Language (rstl.js) is a small function that implements
a template language, it is similar to mustache.js but a lot smaller and with
less features.

## <a id='examples'>Examples</a>

> The examples assume NodeJS or a module bundler like webpack or browserify is being used.
> If you are using `dist/rstl.js` or `dist/rstl.min.js` then `window.rstl()` will be available.

__1.__

Replace the 'name' variable with 'dude'.
By default, HTML is escaped in strings that are substituted for a variable.

```javascript
const rstl = require('rstl')
const greeting = rstl('Hello {{name}}.', {name: 'dude'})
document.getElementById('greeting').innerHTML = greeting
```

__2.__

Replace the 'name' variable with '&lt;b&gt;dude&lt;/b&gt;'.
HTML is not escaped in this example.

```javascript
const rstl = require('rstl')
const greeting = rstl('Hello {{name}}.', {name: '<b>dude</b>'}, {escapeHTML: false})
document.getElementById('greeting').innerHTML = greeting
```

__3.__

Replace the 'name' variable and the 'age' variables with 'dude' and '25'.

```javascript
const rstl = require('rstl')
const greeting = rstl('Hello {{name}}. You look around {{age}}.', {name: 'dude', age: 25})
document.getElementById('greeting').innerHTML = greeting
```

__4.__

Replace the 'name' variable by calling a function that returns a string.

```javascript
const rstl = require('rstl')
const greeting = rstl('Hello {{name}}', {name: () => 'dude'})
document.getElementById('greeting').innerHTML = greeting
```

## <a id='install'>Install</a>

npm:

    $ npm i --save rstl.js

yarn:

    $ yarn add rstl.js

## <a id='license'>License</a>

This project uses the MIT license, please see [LICENSE.txt](./LICENSE.txt) for details.
