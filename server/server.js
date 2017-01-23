var router = require('./router.js');
var express = require('express');
var app = express();

app.use(router, function(req, res, next) {
  next();
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});

module.exports = app;
