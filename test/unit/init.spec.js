var expect = require('chai').expect;

describe('Assertion testing', function() {
  it('true should equal true', function() {
    expect('test').to.equal('test');
  });
});
