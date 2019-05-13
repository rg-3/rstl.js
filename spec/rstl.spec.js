const rstl = require('../index')

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
})