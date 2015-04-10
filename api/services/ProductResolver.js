var ImageEncoder = require('./ImageEncoder');

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

    return Product
      .findOne(rfid)
      .then(embedImage);
  }
};
