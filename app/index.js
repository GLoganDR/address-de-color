'use strict';

var port = process.env.PORT;
var db = process.env.DB;

var express = require('express');

var app = express();

//export app to config//
//require this config file and send it to app.//
require('./lib/config')(app);
require('./lib/pipeline')(app, express);
require('./lib/mongodb')(db);

app.listen(port, function(){
  console.log('Express is ready' + port);
});
