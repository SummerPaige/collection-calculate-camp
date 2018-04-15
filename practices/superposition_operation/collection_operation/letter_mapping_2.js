'use strict';

function average_to_letter(collection) {
  var sum=collection.reduce(function(x,y){
    return x+y;
  });
  var average=Math.ceil(sum/collection.length);
  var result=String.fromCharCode(average+96);
   return result;
}

module.exports = average_to_letter;
