var req = require('request-promise');

var extractData = function(response) {

  var base64Prefix = 'data:' + response.headers['content-type'] + ';base64,',
    data = response.body;

  return base64Prefix + data;
};

module.exports = {

  getBase64Image: function(imageUrl) {

    var reqOpts = {
      url: imageUrl,
      encoding: 'base64',
      resolveWithFullResponse: true
    };

    return req(reqOpts)
      .then(extractData);
  }
};
