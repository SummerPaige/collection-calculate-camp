'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var a=collection_a.sort().toString();
  var b=collection_b.sort().toString();
  var result=(a==b);
  return result;
}

module.exports = compare_collections;
