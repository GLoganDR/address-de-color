'use strict';

function Person(){}

Object.defineProperty(Person, 'collection', {   //Getter function!!!//
  get: function(){return global.mongodb.collection('people');}
});

Person.all = function(cb){  //uses the Getter function so I don't have to type //
//global.mongodb and all that//
  Person.collection.find().toArray(cb);
};

module.exports = Person;
