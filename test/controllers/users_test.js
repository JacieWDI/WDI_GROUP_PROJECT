/* globals api, expect, describe, beforeEach, afterEach, it */

require('../spec_helper');
const User = require('../../models/user');

describe('User tests', ()=> {

  beforeEach(done => {
    User.collection.drop();
    done();
  });

  afterEach(done => {
    User.collection.drop();
    done();
  });

  describe('GET /api/users', ()=> {
    let token;
    beforeEach(done => {
      User
        .create({
          userName: 'Mavis',
          email: 'mavis@mavis.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .then(() => {
          return api
            .post('/api/login')
            .set('Accept', 'application/json')
            .send({
              email: 'mavis@mavis.com',
              password: 'password'
            });
        })
        .then(res => {
          token = res.body.token;
          done();
        })
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get('/api/users')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.status).to.eq(200);
          done();
        });
    });

    it('should respond with a JSON object', done => {
      api
        .get('/api/users')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
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
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return an array of user objects', done => {
      api.get('/api/users')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body)
            .and.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              'id',
              'userName',
              'email'
            ]);
          done();
        });
    });

    it('user objects should have properties: _id userName, email', done => {
      api.get('/api/users')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          const firstUser = res.body[0];

          expect(firstUser)
            .to.have.property('id')
            .and.to.be.a('string');

          expect(firstUser)
            .to.have.property('userName')
            .and.to.be.a('string');

          expect(firstUser)
            .to.have.property('email')
            .and.to.be.a('string');

          done();
        });
    });

    describe('Make more than one user', () => {
      let token;

      beforeEach(done => {
        User.create([
          {
            userName: 'Milly',
            email: 'milly@milly.com',
            password: 'password',
            passwordConfirmation: 'password'
          },
          {
            userName: 'Matt',
            email: 'matt@matt.com',
            password: 'password',
            passwordConfirmation: 'password'
          }
        ])
          .then(() => {
            return api
              .post('/api/login')
              .set('Accept', 'application/json')
              .set('Authorization', `Bearer ${token}`)
              .send({
                email: 'mavis@mavis.com',
                password: 'password'
              });
          })
          .then(res => {
            token = res.body.token;
            done();
          })
          .catch(done);
      });

      it('should return three users', done => {
        api
          .get('/api/users')
          .set('Accept', 'application/json')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            expect(res.body.length).to.equal(3);
            done();
          });
      });
    });
  });


});
