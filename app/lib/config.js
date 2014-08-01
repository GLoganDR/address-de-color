'use strict';

//moved from index.js. lib is a directory of standard files.
module.exports = function(app){
app.set('view engine', 'jade');
app.set('views', __dirname + '/../views');

console.log('Express is configured');
};


