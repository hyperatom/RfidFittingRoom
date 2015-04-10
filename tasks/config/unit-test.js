/**
 * Unit tests JavaScript modules.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to use mocha to unit test JavaScript modules.
 */
module.exports = function(grunt) {

  grunt.config.set('mochaTest', {
    test: {
      options: {
        reporter: 'spec'
      },
      src: ['test/bootstrap.test.js', 'test/**/*.spec.js']
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');
};
