var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  //check if the user email exists
  //create the user
  db.saveUser({email, password});
  //send welcome email
};
