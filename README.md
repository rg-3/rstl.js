# rstl.js

1. <a href='#introduction'>Introduction</a>
2. <a href='#examples'>Examples</a>
3. <a href='#install'>Install</a>
4. <a href='#license'>License </a>

[![Build Status](https://travis-ci.org/rg-3/rstl.js.svg?branch=master)](https://travis-ci.org/rg-3/rstl.js)

## <a id='#introduction'>Introduction</a>

A small template language implemented as a small function.

## <a id='examples'>Examples</a>

__1.__

The following example performs a simple substitution, replacing `{{longName}}`
with the text `Really Small Template Language`:

```javascript
import rstl from 'rstl.js';
const variables = {longName: 'Really Small Template Language'};
const message = rstl('rstl stands for {{longName}}', variables);
console.log(message);
```

__2.__

By default HTML input is escaped from the string that the `rstl` function returns,
this can be disabled by setting the `escapeHTML` option to false. The following
example demonstrates that:

```javascript
import rstl from 'rstl.js';
const variables = {longName: '<b>Really Small Template Language</b>'};
const message = rstl('rstl stands for {{longName}}', variables {escapeHTML: false});
console.log(message);
```

## <a id='install'>Install</a>

If in a NPM or Yarn environment, either one of these should work:

    $ npm i --save @rg-3/rstl.js
    $ yarn add @rg-3/rstl.js

If you're in a browser environment without NPM or Yarn, you can save [dist/rstl.min.js](https://github.com/rg-3/rstl.js/blob/master/dist/rstl.min.js)
to your project and link to it from a `<script>` tag. It has been transpiled to ES5,
and adds `window.rstl`.


## <a id='license'>License</a>

MIT license. See [./LICENSE.txt](./LICENSE.txt).
