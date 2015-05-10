var expect = require('chai').expect,
  testImages = require('./images');

module.exports = {

  assertProperties: function(product) {
    expect(product).to.have.property('id');
    expect(product).to.have.property('name');
    expect(product).to.have.property('description');
    expect(product).to.have.property('price');
    expect(product).to.have.property('image');
    expect(product).to.have.property('relatedProducts');
    expect(product).to.have.property('rating');
    expect(product).to.have.property('inStore');
    expect(product).to.have.property('storeLocation');
  },

  assertEqual: function(product, testProduct) {
    expect(product.id).to.equal(testProduct.id);
    expect(product.name).to.equal(testProduct.name);

    expect(product.description).to.equal(testProduct.description);

    expect(product.price).to.equal(testProduct.price);
    expect(product.image).to.equal(testImages[product.id]);

    expect(product.storeLocation).to.equal(testProduct.storeLocation);

    if (product.relatedProducts) {
      for (var i=0; i < product.relatedProducts.length; i++) {
        this.assertEqual(product.relatedProducts[i], testProduct.relatedProducts[i]);
      }
    }
  }
};
