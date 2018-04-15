'use strict';

function average_uneven(collection) {
  var even=collection.filter(function(item){
       return item%2!=0;
  });

  var sum=even.reduce(function(x,y){
     return x+y;
  });

  return sum/even.length;
}

module.exports = average_uneven;
