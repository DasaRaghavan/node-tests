const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('expressTests', () => {
  describe('/GET', () => {
    it('should return a hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            errorMessage: 'Page not found.'
          })
        })
        .end(done)
    });
  });
  describe('/USERS', () => {
    it('should include user', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Dasa', age: 50
          })
        })
        .end(done)
    });
  });
});
