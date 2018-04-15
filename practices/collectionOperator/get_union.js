'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var arr=[];
  var collection_c=[];
  arr=collection_a.concat(collection_b);
  collection_c=Array.from(new Set(arr));
  return collection_c;
}

module.exports = get_union;
