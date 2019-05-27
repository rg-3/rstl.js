const rstl = require('../src/index')
describe('rstl', () => {
  it('substitutes a variable with a value', () => {
    const subject = rstl('Hi, {{name}}', {name: 'Emanuela'})
    expect(subject).toBe('Hi, Emanuela')
  })

  it('escapes HTML by default', () => {
    const subject = rstl('Hi, {{name}}', {name: '<b>Emanuela</b>'})
    expect(subject).toBe('Hi, &lt;b&gt;Emanuela&lt;/b&gt;')
  })

  it('does not escape HTML when asked not to', () => {
    const subject = rstl('Hi, {{name}}', {name: '<b>Emanuela</b>'}, {escapeHTML: false})
    expect(subject).toBe('Hi, <b>Emanuela</b>')
  })

  it('substitutes multiple instances of the same variable', () => {
    const subject = rstl('Hi, {{name}}. How are you {{name}}?', {name: 'Emanuela'})
    expect(subject).toBe('Hi, Emanuela. How are you Emanuela?')
  })

  it('substitutes multiple variables', () => {
    const subject = rstl('Hi. My name is {{name}} and I am {{age}}.', {name: 'Emanuela', age: 25})
    expect(subject).toBe('Hi. My name is Emanuela and I am 25.')
  })

  it('substitutes a function for a string', () => {
    const subject = rstl('Hello, {{name}}', {name: () => 'Robert'})
    expect(subject).toBe('Hello, Robert')
  })
})