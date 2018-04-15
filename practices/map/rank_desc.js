'use strict';
var rank_desc = function(collection){
  //return [2,3,4,5,6];
  function sortNumber(a,b){
    return a-b;
  }
  return collection.sort(sortNumber);

};

module.exports = rank_desc;
