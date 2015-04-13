var ImageEncoder = require('./ImageEncoder'),
  Q = require('q');

module.exports = {

  rfidToProduct: function(rfid) {

    function embedImage(product) {

      var attachProductImage = function(image) {
        product.image = image;
        return product;
      };

      return ImageEncoder
        .getBase64Image(product.imageUrl)
        .then(attachProductImage);
    }

    function embedProductTreeImages(product) {

      function embed() {
        return embedImage(product);
      }

      if (product.relatedProducts.length) {
        var productQueue = [];

        for (var i=0; i < product.relatedProducts.length; i++) {
          productQueue.push(embedProductTreeImages(product.relatedProducts[i]));
        }

        return Q.all(productQueue)
          .then(embed);
      }

      return embedImage(product);
    }

    return Product
      .findOne(rfid)
      .populate('relatedProducts')
      .then(embedProductTreeImages);
  }
};
