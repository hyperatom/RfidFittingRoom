/**
 * RfidController
 *
 * @description :: Server-side logic for managing rfids
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {

  show: function(req, res) {

    return RfidRepo
      .show()
      .then(function(product) {

        return res.json(product);
      });
  },

  store: function(req, res) {

    var rfid = req.param('id');

    var extractResponse = function(data) {
      return res.json(data);
    };

    return RfidRepo
      .store(rfid)
      .then(extractResponse);
  }
};

