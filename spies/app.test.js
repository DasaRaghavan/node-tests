const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');


describe('App', () => {
  //create the spy to call db inside app.js
  //db has a function called saveUser
  //the test will now call the spy 'saveUser' instead of the db.saveUser when app runs
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call spy correctly', () => {
    var spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
  });

  it('should call db-spy with user object correctly', () => {
    var email = 'dasa@example.com';
    var password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
