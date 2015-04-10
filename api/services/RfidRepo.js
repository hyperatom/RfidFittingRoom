var ProductResolver = require('./ProductResolver'),
  NodePromise = require('Promise');

module.exports = {

  product: {},

  show: function() {
    var self = this;

    return new NodePromise(function(resolve) {
      resolve(self.product);
    });
  },

  store: function(rfid) {

    var self = this;

    function setProduct(product) {
      self.product = product;
      return product;
    }

    return ProductResolver
      .rfidToProduct(rfid)
      .then(setProduct);
  }
};
