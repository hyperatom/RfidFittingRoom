var req = require('supertest-as-promised'),
  sinon = require('sinon'),
  expect = require('chai').expect,
  sails = require('sails'),
  testImages = require('../../helpers/images');

describe('RFID Route Availability', function() {

  describe('POST /rfid', function() {

    it('should respond with 200 OK', function(done) {

      req(sails.hooks.http.app)
        .post('/rfid')
        .send({ id: 11111 })
        .expect(200, done);
    });

    it('should store the RFID code', function(done) {

      var spy = sinon.spy(RfidRepo, 'store');

      req(sails.hooks.http.app)
        .post('/rfid')
        .send({ id: 11111 })
        .expect(200)
        .then(function() {
          expect(spy.called).to.equal(true);
          done();
        });
    });

  });

  describe('GET /rfid', function() {

    it('should receive a product as JSON', function(done) {

      req(sails.hooks.http.app)
        .get('/rfid')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          expect(res.body).to.have.property('id');
          expect(res.body).to.have.property('name');
          expect(res.body).to.have.property('description');
          expect(res.body).to.have.property('price');
          expect(res.body).to.have.property('image');
          done();
        });
    });

  });

});

describe('RFID-Product mappings', function() {

  it('should return the correct product for RFID code 11111', function(done) {

    function assertCorrectProduct(done) {

      return req(sails.hooks.http.app)
        .get('/rfid')
        .expect(200)
        .end(function(err, res) {

          expect(res.body.id).to.equal(11111);
          expect(res.body.name).to.equal('Ruched Neckline Vest Shift Dress');

          expect(res.body.description).to.equal(
            'Dressing down for the beach doesn\'t mean a ' +
            'compromise in style; this beach dress is a cute option.');

          expect(res.body.price).to.equal(16.00);
          expect(res.body.image).to.equal(testImages.dress_1);

          done();
        });
    }

    req(sails.hooks.http.app)
      .post('/rfid')
      .send({id: 11111})
      .expect(200)
      .end(function() {
        assertCorrectProduct(done);
      });
  });

  it('should return the correct product for RFID code 22222', function(done) {

    function assertCorrectProduct(done) {

      return req(sails.hooks.http.app)
        .get('/rfid')
        .expect(200)
        .end(function(err, res) {

          expect(res.body.id).to.equal(22222);
          expect(res.body.name).to.equal('Floral Fit & Flare Tea Dress');

          expect(res.body.description).to.equal(
            'For a gorgeously ladylike look, this tea dress is just the thing. ' +
            'Floral prints are an easy way to channel a current catwalk trend.');

          expect(res.body.price).to.equal(39.50);
          expect(res.body.image).to.equal(testImages.dress_2);

          done();
        });
    }

    req(sails.hooks.http.app)
      .post('/rfid')
      .send({id: 22222})
      .expect(200)
      .end(function() {
        assertCorrectProduct(done);
      });
  });

});
