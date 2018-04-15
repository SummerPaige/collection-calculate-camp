'use strict';

function compute_median(collection) {
  //在这里写入代码
  var result=0;
  function sortNumber(a,b){
    return a-b;
  }
  var collectionSorted=collection.sort(sortNumber);
  var l=collectionSorted.length;
  if(l%2!=0){
    result=collectionSorted[parseInt(l/2)];
  }else{
    result=(collectionSorted[l/2]+collectionSorted[l/2-1])/2;
  }
 return result;
}

module.exports = compute_median;
