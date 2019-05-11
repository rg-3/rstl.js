# rtsl.js

1. <a href='#introduction'>Introduction</a>
2. <a href='#examples'>Examples</a>
3. <a href='#install'>Install</a>
4. <a href='#license'>License </a>

## <a id='#introduction'>Introduction</a>

Really Small Template Language (rstl.js) is a small function that implements
a template language, it is similar to mustache.js but a lot smaller and with 
less features.

In a nutshell, rtjs.js replaces placeholder variable(s) with one or more string 
values.

## <a id='examples'>Examples</a> 

__1.__

Replace the 'name' variable with 'Emanuela'.  
By default, HTML is escaped in strings that are substituted for a variable. 

```javascript
import rstl from 'rstl'
const greeting = rstl('Hi, {{name}}.', {name: 'Emanuela'})
document.getElementById('greeting').innerHTML = greeting
```

__2.__

Replace the 'name' variable with '&lt;b&gt;Emanuela&lt;/b&gt;'.  
HTML is not escaped in this example.

```javascript
import rstl from 'rstl'
const greeting = rstl('Hi, {{name}}.', {name: '<b>Emanuela</b>'}, {escapeHTML: false})
document.getElementById('greeting').innerHTML = greeting
```

## <a id='install'>Install</a>

With yarn/npm:

    $ yarn add https://github.com/rg-3/rstl.js
    $ npm i https://github.com/rg-3/rstl.js

## <a id='license'>License</a> 

This project uses the MIT license, see [LICENSE.txt](./LICENSE.txt) for details.