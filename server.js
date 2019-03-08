var express = require('./express');
var dbConfig = require('./dbConfig')
var app = express();
app.listen(dbConfig.PORT);
module.exports = app;
console.log('server listening at port 3000');