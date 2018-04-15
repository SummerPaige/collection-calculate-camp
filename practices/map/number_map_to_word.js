'use strict';
var number_map_to_word = function(collection){
  //return ['a','b','c','d','e'];
  var result=collection.map(function(element,index,collection){
    return String.fromCharCode(element+96);
  })
  return result;
};

module.exports = number_map_to_word;
