var req = require('supertest');

describe('RFID Route Availability', function() {

  describe('POST /rfid', function() {

    it('should respond with JSON and 200 OK', function(done) {

      req(sails.hooks.http.app)
        .post('/rfid')
        .send({ id: 1 })
        .expect('Content-Type', /application\/json/)
        .expect(200, done);
    });

  });
});
