const { expect } = require('chai');
const chai = require('chai')
const hello = require('../index');
const { JSDOM } = require('jsdom');

chai.use(require('chai-dom'))
require('jsdom-global')()


describe('Hello World', () => {
  it('hello function should return hello world', () => {
    expect(hello()).to.equal('hello world')
  })
})


describe('HTML', () => {

  beforeEach((done) => {
    JSDOM.fromFile('index.html')
    .then((dom) => {
      global.document = dom.window.document
    })
    .then(done, done);
  });

  describe('Heading', () => {
    it("DOM should have a h1 element that saids Hello World!'", () => {
      let element = document.getElementById('hello')
      expect(element).to.have.text('hello world')
    })
  })
 
})