var ProductResolver = require('./ProductResolver'),
  Q = require('q');

module.exports = {

  product: {},

  show: function() {
    var self = this,
      deferred = Q.defer();

    deferred.resolve(self.product);

    return deferred.promise;
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
