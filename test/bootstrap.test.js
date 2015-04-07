var Sails = require('sails'),
  sails;

before(function (done) {

  function initServer(err, server) {
    sails = server;

    if (err) {
      return done(err);
    }

    done(err, sails);
  }

  Sails.lift({}, initServer);
});

after(function (done) {
  sails.lower(done);
});
