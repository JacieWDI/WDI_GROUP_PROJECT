/* globals api, expect, describe, beforeEach, afterEach, it, xit */

require('../spec_helper');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/enviroment');

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
          user: {
            userName: 'Mavis',
            email: 'mavis@mavis.com',
            password: 'password',
            passwordConfirmation: 'password'
          }
        })
        .end((err, res) => {
          expect(res.status).to.eq(201);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.eq('Thank you for registering.');
          expect(res.body.token).to.be.a('string');
          done();
        });
    });

  });

});
