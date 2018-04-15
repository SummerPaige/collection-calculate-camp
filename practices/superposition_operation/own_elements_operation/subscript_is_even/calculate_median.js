'use strict';
var calculate_median = function(collection){
  var result=0;
  var q=Math.floor(collection.length/2);
if(collection.length%2==0)
{
  result=collection[q];
}else {
  result=(collection[q-1]+collection[q+1])/2;
}
return result;
};
module.exports = calculate_median;
