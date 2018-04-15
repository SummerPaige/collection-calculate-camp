'use strict';

function hybrid_operation(collection) {
var sum=collection.reduce(function(x,y){
  return x+y;
});
var result=sum*3+collection.length*2;
return result;
}

module.exports = hybrid_operation;
