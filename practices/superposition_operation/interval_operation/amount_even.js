'use strict';

function amount_even(collection) {
var even=collection.filter(function(item){
     return item%2==0;
});

var sum=even.reduce(function(x,y){
   return x+y;
});

return sum;
}

module.exports = amount_even;
