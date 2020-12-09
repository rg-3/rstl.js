# rstl.js

**Table of contents**

1. <a href='#introduction'>Introduction</a>
2. <a href='#examples'>Examples</a>
3. <a href='#install'>Install</a>
4. <a href='#license'>License </a>

## <a id='#introduction'>Introduction</a>

rstl.js is a **R**eally **S**imple **T**emplate **L**anguage implemented 
as a simple function.

## <a id='examples'>Examples</a>

**#1**

This example replaces `Hello, {{planet}}` with `Hello, Earth` by 
substituting the variable name(`{{planet}}`) with the `Earth` value.

```javascript
import rstl from 'rstl.js';
rstl('Hello, {{planet}}', {planet: 'Earth'}); // => "Hello, Earth"
```

**#2**

It's possible for a function to be passed as a variable's value. It will 
be called by rstl and its return value inserted in place of the variable 
name:

```javascript
import rstl from 'rstl.js';
rstl('Hello, {{planet}}', {planet: () => 'Earth'}); // => "Hello, Earth"
```

**#3**

By default rstl will escape HTML entities from a variable's value, but it can 
be disabled by providing the `escapeHTML` option: 

```javascript
import rstl from 'rstl.js';
rstl('Hello, {{planet}}', {planet: '<b>Mars</b>'}, {escapeHTML: false}); // => "Hello, <b>Mars</b>"
```

## Limitations

A variable name can use the characters a-z, A-Z, and 0-9. If other characters are 
used an error will be thrown.

## <a id='install'>Install</a>

__NPM__

If you're in an NPM environment there's an NPM package to use.  
The package should be required or imported as `@rg-3/rstl.js`.

    # npm users
    $ npm i --save @rg-3/rstl.js

    # yarn users
    $ yarn add @rg-3/rstl.js

__Old school method__

If you're in a browser environment that's not using NPM, save
[dist/rstl.min.js](https://github.com/rg-3/rstl.js/blob/master/dist/rstl.min.js)
to your project and link to it from a `<script>` tag. It has been trans-piled
to ES5, and adds `window.rstl`.


## <a id='license'>License</a>

MIT license. See [./LICENSE.txt](./LICENSE.txt).
