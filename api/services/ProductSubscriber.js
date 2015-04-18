module.exports = {

  subscribe: {
    all: function(req) {
      Product.find({}).exec(function(err, products) {
        Product.subscribe(req.socket, products);
      });
    }
  }
};
