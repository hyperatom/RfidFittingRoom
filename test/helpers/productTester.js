var expect = require('chai').expect,
  testImages = require('./images');

module.exports = {
  assert: function(product, testProduct) {
    expect(product.id).to.equal(testProduct.id);
    expect(product.name).to.equal(testProduct.name);

    expect(product.description).to.equal(testProduct.description);

    expect(product.price).to.equal(testProduct.price);
    expect(product.image).to.equal(testImages[product.id]);

    if (product.relatedProducts) {
      for (var i=0; i < product.relatedProducts.length; i++) {
        this.assert(product.relatedProducts[i], testProduct.relatedProducts[i]);
      }
    }
  }
};
