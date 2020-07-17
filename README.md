# rstl.js

**Table of contents**

1. <a href='#introduction'>Introduction</a>
2. <a href='#examples'>Examples</a>
3. <a href='#install'>Install</a>
4. <a href='#license'>License </a>

## <a id='#introduction'>Introduction</a>

A small template language implemented as a small function.

## <a id='examples'>Examples</a>

__1.__

The following example performs a simple substitution, replacing `{{name}}`
with `Really Small Template Language`:

```javascript
import rstl from 'rstl.js';
const variables = {name: 'Really Small Template Language'};
console.log(rstl('rstl stands for {{name}}', variables));
```

__2.__

The following example demonstrates how a function can be used as the value of
a variable:

```javascript
import rstl from 'rstl.js';
const variables = {name: () => 'Really small template language'};
console.log(rstl('rstl stands for {{name}}', variables));
```

__3.__

The following example demonstrates how to avoid escaping HTML:

```javascript
import rstl from 'rstl.js';
const variables = {name: '<b>Really Small Template Language</b>'};
console.log(rstl('rstl stands for {{name}}', variables, {escapeHTML: false}));
```

## <a id='install'>Install</a>

__NPM__

Note that the `require` or `import` of rstl.js should use `@rg-3/rstl.js` (instead
of `rstl.js`)

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
