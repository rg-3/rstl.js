const escapeHTML   = (str) => str.replace(new RegExp(/[<>&"']/, 'g'), (chr) => escapeTable[chr]);

const escapeTable = {
  '<' : '&lt;'  ,
  '>' : '&gt;'  ,
  '&' : '&amp;' ,
  '"' : '&quot;',
  "'" : '&#039;'
};

const getVariable = (name, variables) => {
  const value = variables[name];
  if(typeof(value) === 'function') {
    return value()
  } else {
    return value;
  }
};

const rstl = function(template, variables, options={}) {
  const escape = options.escapeHTML === undefined ? true : options.escapeHTML;
  for (let name in variables) {
    if (!variables.hasOwnProperty(name)) { continue; }
    if (!/^[a-zA-Z0-9_]+$/.test(name)) { throw new Error(`"${name}" is not a valid variable name`); }
    const value  = String(getVariable(name, variables));
    const regexp = new RegExp(`{{${name}}}`, 'g');
    template = template.replace(regexp, escape ? escapeHTML(value) : value);
  }
  return template;
};

module.exports = rstl;
module.exports.default = rstl;
