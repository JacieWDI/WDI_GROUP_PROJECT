/* globals api, expect, describe, beforeEach, afterEach, it, xit */

require('../spec_helper');
const User = require('../../models/user');

describe('Authentication tests', function() {

  beforeEach(done => {
    User.collection.drop();
    done();
  });

  afterEach(done => {
    User.collection.drop();
    done();
  });

  describe('POST /api/register', function() {
    it('should register a user with the correct credentials', function(done){
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          userName: 'Mavis',
          email: 'mavis@mavis.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.eq(201);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.eq('Thank you for registering.');
          expect(res.body.token).to.be.a('string');
          done();
        });
    });
    it('should not register a user without a password', function(done) {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          userName: 'Mavis',
          email: 'mavis@mavis.com',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.eq(400);
          expect(res.body).to.be.a('object');
          expect(res.body.errors).to.eq('ValidationError: password: required');
          expect(res.body.message).to.eq('Bad Request');
          done();
        });
    });

  });

});
