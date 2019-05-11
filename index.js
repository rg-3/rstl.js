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
  a template language, similar to mustache.js but a lot smaller and with less 
  features.

  It replaces placeholder variables with one or more string values.

  Usage:
    const greeting = rstl('Hello, {{name}}.', {name: 'Robert'}) 
    el.innerHTML = greeting
*/
export default function (template, variables, escapeHTML=true) {
  for (let prop in variables) {
    if (variables.hasOwnProperty(prop)) {
      let regexp = new RegExp(`{{${prop}}}`, 'g')
      let value = escapeHTML ? escapeHTML(variables[prop]) : variables[prop]
      template = template.replace(regexp, value)
    }
  }
  return template
}