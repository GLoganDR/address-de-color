'use strict';
//moved from index.js. These are the standard background web requirements.
var morgan = require('morgan');
var bodyParser = require('body-parser');
var home = require('../controllers/home');
var people = require('../controllers/people');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../static'));
  app.use(bodyParser.urlencoded({extended:true}));

  app.get('/', home.index);
  app.get('/about', home.about);
  app.get('/faq', home.faq);
  app.get('/contact', home.contact);
  app.get('/people', people.index);

  console.log('Pipeline is configured');
};
