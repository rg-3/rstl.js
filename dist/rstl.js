(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

window.rstl = require('./index');

},{"./index":2}],2:[function(require,module,exports){
'use strict';

var escapeTable = {
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  '"': '&quot;',
  "'": '&#039;'
};

var escapeHTML = function escapeHTML(string) {
  return string.replace(new RegExp(/[<>&"']/, 'g'), function (chr) {
    return escapeTable[chr];
  });
};

/*
  Really Small Template Language (rstl.js) is a small function that implements
  a template language, it is similar to mustache.js but a lot smaller and with 
  less features. 
  
  Usage:
    const greeting = rstl('Hi, {{name}}.', {name: 'Emanuela'})
    document.getElementById('greeting').innerHTML = greeting

    const greeting = rstl('Hi, {{name}}.', {name:  '<b>Emanuela</b>'}, {escapeHTML: false})
    document.getElementById('greeting').innerHTML = greeting
*/
module.exports = function (template, props) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var escape = options.escapeHTML === undefined ? true : options.escapeHTML;
  for (var prop in props) {
    if (props.hasOwnProperty(prop)) {
      var value = String(props[prop]);
      var regexp = new RegExp('{{' + prop + '}}', 'g');
      template = template.replace(regexp, escape ? escapeHTML(value) : value);
    }
  }
  return template;
};

},{}]},{},[1]);
