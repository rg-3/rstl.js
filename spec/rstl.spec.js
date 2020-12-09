const rstl = require('../src/rstl.js');

describe('rstl', () => {
  it('substitutes a variable', () => {
    const subject = rstl('Hello, {{planet}}', {planet: 'Earth'});
    expect(subject).toBe('Hello, Earth');
  })

  it('escapes HTML', () => {
    const subject = rstl('Hello, {{planet}}', {planet: '<b>Earth</b>'});
    expect(subject).toBe('Hello, &lt;b&gt;Earth&lt;/b&gt;');
  })

  it('does not escape HTML', () => {
    const subject = rstl('Hello, {{planet}}', {planet: '<b>Earth</b>'}, {escapeHTML: false});
    expect(subject).toBe('Hello, <b>Earth</b>');
  })

  it('substitutes multiple instances of the same variable', () => {
    const subject = rstl('Hello, {{planet}}. Did you know {{planet}} shines blue?', {planet: 'Earth'});
    expect(subject).toBe('Hello, Earth. Did you know Earth shines blue?')
  });

  it('substitutes the return value of a function for a variable', () => {
    const subject = rstl('Hello, {{planet}}', {planet: () => 'Earth'});
    expect(subject).toBe('Hello, Earth');
  });

  it('disallows variable names outside charset a-z, A-Z, 0-9 and _', () => {
    const subject = () => rstl('Hello, {{foo bar}}', {'foo bar': 'baz'});
    expect(subject).toThrow(new Error(`"foo bar" is not a valid variable name`));
  })
});
