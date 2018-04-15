'use strict';
var map_to_three_multiples = function(collections){
  var thisValue=3;
  var result=collections.map(function(element,index,collections){
    return element*thisValue;
  })
  return result;
};

module.exports = map_to_three_multiples;
