const rstl = require('../src/rstl.js');

describe('rstl', () => {
  it('substitutes a variable with a value', () => {
    const subject = rstl('{{name}}', {name: 'Dude'});
    expect(subject).toBe('Dude');
  })

  it('escapes HTML by default', () => {
    const subject = rstl('{{name}}', {name: '<b>Dude</b>'});
    expect(subject).toBe('&lt;b&gt;Dude&lt;/b&gt;');
  })

  it('does not escape HTML when asked not to', () => {
    const subject = rstl('{{name}}', {name: '<b>Dude</b>'}, {escapeHTML: false});
    expect(subject).toBe('<b>Dude</b>');
  })

  it('substitutes multiple instances of the same variable', () => {
    const subject = rstl('{{name}}. How are you {{name}}?', {name: 'Dude'});
    expect(subject).toBe('Dude. How are you Dude?');
  });

  it('substitutes multiple variables', () => {
    const subject = rstl('My name is {{name}} and I am {{age}}.', {name: 'Dude', age: 25});
    expect(subject).toBe('My name is Dude and I am 25.');
  });

  it('substitutes a function for a string', () => {
    const subject = rstl('Hello, {{name}}', {name: () => 'Dudette'});
    expect(subject).toBe('Hello, Dudette');
  });
});
