/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#/documentation/concepts/ORM
 */

var identityToModelName = function(identity) {
  return identity.charAt(0).toUpperCase() + identity.slice(1);
};

var printReport = function (err, opts) {
  if (err) {
    sails.log.debug(err);
    opts.callback();
  } else {
    sails.log.debug(opts.modelName + ' seed planted');
    opts.callback();
  }
};

module.exports.models = {

  /***************************************************************************
   *                                                                          *
   * Your app's default connection. i.e. the name of one of your app's        *
   * connections (see `config/connections.js`)                                *
   *                                                                          *
   ***************************************************************************/
  connection: 'localDiskDb',

  /***************************************************************************
   *                                                                          *
   * How and whether Sails will attempt to automatically rebuild the          *
   * tables/collections/etc. in your schema.                                  *
   *                                                                          *
   * See http://sailsjs.org/#/documentation/concepts/ORM/model-settings.html  *
   *                                                                          *
   ***************************************************************************/
  // migrate: 'alter',

  seed: function (callback) {

    var self = this;

    var modelName = identityToModelName(self.adapter.identity);

    if (!self.seedData) {
      sails.log.debug('No data avaliable to seed ' + modelName);
      callback();
      return;
    }

    function attemptSeed(err, count) {

      function canSeed() {
        return !err && count === 0;
      }

      if (canSeed()) {
        seedDb();
      } else {
        sails.log.debug(modelName + ' had models, so no seed needed');
        callback();
      }
    }

    function seedDb() {
      sails.log.debug('Seeding ' + modelName + '...');

      if (self.seedData instanceof Array) {
        self.seedArray(callback);
      } else {
        self.seedObject(callback);
      }
    }

    self
      .count()
      .exec(attemptSeed);
  },

  seedArray: function (callback) {

    var self = this;
    var modelName = identityToModelName(self.adapter.identity);

    var report = function(err) {
      printReport(err, {
        modelName: modelName,
        callback: callback
      });
    };

    self
      .createEach(self.seedData)
      .exec(report);
  },

  seedObject: function (callback) {

    var self = this;
    var modelName = identityToModelName(self.adapter.identity);

    var report = function(err) {
      printReport(err, {
        modelName: modelName,
        callback: callback
      });
    };

    self
      .create(self.seedData)
      .exec(report);
  }
};
