'use strict';

exports.index = function(req, res){
  res.render('home/index'); // DO NOT do ('/home/index') it will go to the root directory.//
};

exports.about = function(req, res){
  res.render('home/about'); // DO NOT do ('/home/index') it will go to the root directory.//
};

exports.faq = function(req, res){
  res.render('home/faq'); // DO NOT do ('/home/index') it will go to the root directory.//
};

exports.contact = function(req, res){
  res.render('home/contact'); // DO NOT do ('/home/index') it will go to the root directory.//
};

