'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var arr=collection.split('->').sort(function(a,b){
    return a-b;
  });
  var q=Math.ceil(arr.length/2);
  var result=(parseInt(arr[q-1])+parseInt(arr[q]))/2;
  return result;

}

module.exports = compute_chain_median;
