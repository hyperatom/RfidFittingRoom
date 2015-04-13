var req = require('supertest-as-promised'),
  sinon = require('sinon'),
  expect = require('chai').expect,
  sails = require('sails'),
  testProducts = require('../../helpers/products'),
  productTester = require('../../helpers/productTester');

describe('RFID Route Availability', function() {

  this.timeout(5000);

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
          expect(res.body).to.have.property('relatedProducts');
          done();
        });
    });

    it('should have nested products', function(done) {

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
          expect(res.body).to.have.property('relatedProducts');
          done();
        });
    });

  });
});

describe('RFID-Product mappings', function() {

  this.timeout(5000);

  it('should return the correct product for RFID code 11111', function(done) {

    function getActiveProduct(done) {

      return req(sails.hooks.http.app)
        .get('/rfid')
        .expect(200)
        .end(function(err, res) {
          productTester.assert(res.body, testProducts.product_1);
          done();
        });
    }

    req(sails.hooks.http.app)
      .post('/rfid')
      .send({id: 11111})
      .expect(200)
      .end(function() {
        getActiveProduct(done);
      });
  });

  it('should return the correct product for RFID code 22222', function(done) {

    function getActiveProduct(done) {

      return req(sails.hooks.http.app)
        .get('/rfid')
        .expect(200)
        .end(function(err, res) {
          productTester.assert(res.body, testProducts.product_2);
          done();
        });
    }

    req(sails.hooks.http.app)
      .post('/rfid')
      .send({id: 22222})
      .expect(200)
      .end(function() {
        getActiveProduct(done);
      });
  });
});
