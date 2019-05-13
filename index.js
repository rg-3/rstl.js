const escapeTable = {
  '<' : '&lt;'  ,
  '>' : '&gt;'  ,
  '&' : '&amp;' ,
  '"' : '&quot;',
  "'" : '&#039;'
}

const escapeHTML = (string) => {
  return string.replace(new RegExp(/[<>&"']/, 'g'), (chr) => {
    return escapeTable[chr]
  })
}

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
module.exports = function (template, props, options={}) {
  const escape = options.escapeHTML === undefined ? true : options.escapeHTML
  for (let prop in props) {
    if (props.hasOwnProperty(prop)) {
      let regexp = new RegExp(`{{${prop}}}`, 'g')
      let value = escape ? escapeHTML(props[prop]) : props[prop]
      template = template.replace(regexp, value)
    }
  }
  return template
}