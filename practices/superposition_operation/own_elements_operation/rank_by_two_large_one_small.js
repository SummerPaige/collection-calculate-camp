'use strict';
function rank_by_two_large_one_small(collection){

function sortNumber(a,b){
  return a-b;
}
var collection_sort=collection.sort(sortNumber);


for(var i=0;i<collection_sort.length-2;i+=3)
{
  var temp=collection_sort[i];
  collection_sort[i]=collection_sort[i+1];
  collection_sort[i+1]=collection_sort[i+2];
  collection_sort[i+2]=temp;
}
return collection_sort;
}
module.exports = rank_by_two_large_one_small;
