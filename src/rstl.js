const escapeTable = {
  '<' : '&lt;'  ,
  '>' : '&gt;'  ,
  '&' : '&amp;' ,
  '"' : '&quot;',
  "'" : '&#039;'
}

const escapeHTML = (string) => {
  return string.replace(new Regexp(/[<>&"']/, 'g'), (chr) => {
    return escapeTable[chr]
  })
}

/*
  Really Small Template Language (rstl.js) is a small function that implements
  a template language, it is similar to mustache.js but a lot smaller and with 
  less features. 
  
  Usage:
    const greeting = rstl('Hi, {{name}}.', {name: 'Robert'})
    el.innerHTML = greeting

    const greeting = rstl('Hi, {{name}}.', {name:  '<b>Robert</b>'}, {escapeHTML: false})
    el.innerHTML = greeting
*/
export default function (template, props, options={}) {
  const escapeHTML = options.escapeHTML === undefined ? true : options.escapeHTML
  for (let prop in variables) {
    if (variables.hasOwnProperty(prop)) {
      let regexp = new RegExp(`{{${prop}}}`, 'g')
      let value = escapeHTML ? escapeHTML(props[prop]) : props[prop]
      template = template.replace(regexp, value)
    }
  }
  return template
}