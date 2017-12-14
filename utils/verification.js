var setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
}
var user = {
  age: 50,
  location: 'Apex'
}
console.log(setName(user, 'Dasa Raghavan'));
