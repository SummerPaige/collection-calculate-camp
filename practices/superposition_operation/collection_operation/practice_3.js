'use strict';

function hybrid_operation_to_uneven(collection) {
var  odd=collection.filter(function(item){
       return item%2!=0;
});
var result=odd.map(function(element){
       return element*3+5;
});
 var sum=result.reduce(function(x,y){
       return x+y;
 });
 return sum;
}

module.exports = hybrid_operation_to_uneven;
