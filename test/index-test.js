var assert = require('assert');
var helloWorld = require('../index')


describe('Hello World', () => {
  it('helloWorld function should return hello world', () => {
    assert.equal(helloWorld(), 'hello world')
  })
})