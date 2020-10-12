var assert = require('assert');
var hello = require('../index');
require('jsdom-global')()


describe('Hello World', () => {
  it('hello function should return hello world', () => {
    assert.equal(hello(), 'hello world')
  })
})

describe('Heading', () => {
  it("DOM should have a h1 element that saids Hello World!'", () => {
    let element = document.getElementsByClassName('h1')[0];
    assert.equal(element.textContent, 'Hello World!')
  })
})