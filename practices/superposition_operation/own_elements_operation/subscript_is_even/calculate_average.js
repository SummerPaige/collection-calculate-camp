'use strict';
var calculate_average = function(collection){
var even=collection.filter(function(item){
     return item%2==0;
});
 var sum=even.reduce(function(x,y){
   return x+y;
 });
var result=sum/even.length;
return result;
};
module.exports = calculate_average;
