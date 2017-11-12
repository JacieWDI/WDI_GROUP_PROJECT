/* globals api, expect, describe, beforeEach, afterEach, it */

require('../spec_helper');

const User = require('../../models/user');

describe('User tests', ()=> {

  beforeEach(done => {
    User.collection.remove();
    done();
  });

  afterEach(done => {
    User.collection.remove();
    done();
  });

  describe('GET /api/users', ()=> {

    beforeEach(done => {
      User.create({
        userName: 'Mavis',
        firstName: 'Mavis',
        lastName: 'Mavis',
        email: 'mavis@mavis.com',
        image: 'image'
      })
        .then(() => done())
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should respond with a JSON object', done => {
      api
        .get('/api/users')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });

    it('should return an array of users', done => {
      api
        .get('/api/users')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return an array of user objects', done => {
      api.get('/api/users')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .and.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              '_id',
              'userName',
              'firstName',
              'lastName',
              'email',
              'image',
              '__v',
              'passwordHash'
            ]);
          done();
        });
    });

    it('user objects should have properities: _id, userName, firstName, lastName, email, image, __v', done => {
      api.get('/api/users')
        .set('Accept', 'application/json')
        .end((err, res) => {
          const firstUser = res.body[0];

          expect(firstUser)
            .to.have.property('_id')
            .and.to.be.a('string');

          expect(firstUser)
            .to.have.property('userName')
            .and.to.be.a('string');

          expect(firstUser)
            .to.have.property('firstName')
            .and.to.be.a('string');

          expect(firstUser)
            .to.have.property('lastName')
            .and.to.be.a('string');

          expect(firstUser)
            .to.have.property('email')
            .and.to.be.a('string');

          expect(firstUser)
            .to.have.property('__v')
            .and.to.be.a('number');

          expect(firstUser)
            .to.have.property('passwordHash')
            .and.to.be.a('string');

          done();
        });
    });

    describe('Make more than one user', () => {

      beforeEach(done => {
        User.create([
          {
            userName: 'Milly',
            firstName: 'Milly',
            lastName: 'Milly',
            email: 'milly@milly.com',
            image: 'image'
          },
          {
            userName: 'Matt',
            firstName: 'Matt',
            lastName: 'Yates',
            email: 'matt@matt.com',
            image: 'image'
          }
        ])
        .then(() => done())
        .catch(done);
      });

      it('should return three users', done => {
        api
          .get('/api/users')
          .set('Accept', 'application/json')
          .end((err, res) => {
            expect(res.body.length).to.equal(3);
            done();
          });
      });
    });
  });

  describe('POST /api/users', () => {

    it('should return a 201 response', done => {
      api
        .post('/api/users')
        .set('Accept', 'application/json')
        .send({
          user: {
            userName: 'Mavis',
            firstName: 'Mavis',
            lastName: 'Mavis',
            email: 'mavis@mavis.com',
            image: 'image'
          }
        })
        .expect(201, done);
    });

  });
});
