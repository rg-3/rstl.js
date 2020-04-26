const escapeTable = {
  '<' : '&lt;'  ,
  '>' : '&gt;'  ,
  '&' : '&amp;' ,
  '"' : '&quot;',
  "'" : '&#039;'
};

const escapeHTML = (string) => {
  return string.replace(new RegExp(/[<>&"']/, 'g'), (chr) => {
    return escapeTable[chr];
  });
};

module.exports = function(template, props, options={}) {
  const escape = options.escapeHTML === undefined ? true : options.escapeHTML
  for (let prop in props) {
    if (props.hasOwnProperty(prop)) {
      const value = String(typeof(props[prop]) === 'function' ? props[prop]() : props[prop]);
      const regexp = new RegExp(`{{${prop}}}`, 'g');
      template = template.replace(regexp, escape ? escapeHTML(value) : value);
    }
  }
  return template;
};
