const express = require('express');


var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    errorMessage: 'Page not found.',
    version: 'version 3.1.4'});
});

app.get('/users', (req, res) => {
  res.status(200).send([
    { name: 'Dasa', age: 50 },
    { name: 'Hema', age:49 },
    { name: 'Srishti', age: 24 },
    { name: 'Anish', age: 17 }
  ]);
});

app.listen(3040, () => {
  console.log('Server started on port 3040');
});

module.exports.app = app;
