'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var flatten=require('array-flatten');
  var arr=flatten(collection,true,true,1);
  var result=Array.from(new Set(arr));

  return result;
}

module.exports = double_to_one;
