/**
 * RfidController
 *
 * @description :: Server-side logic for managing rfids
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var productSubscriber = require('../services/ProductSubscriber').subscribe;

module.exports = {

  show: function(req, res) {

    return RfidRepo
      .show()
      .then(function(product) {

        if (req.isSocket) {
          productSubscriber.all(req);
        }

        return res.json(product);
      });
  },

  store: function(req, res) {

    var rfid = req.param('id');

    var extractResponse = function(data) {
      Product.publishUpdate(data.id, data);
      return res.json(data);
    };

    return RfidRepo
      .store(rfid)
      .then(extractResponse);
  }
};

