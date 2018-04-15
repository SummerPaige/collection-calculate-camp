'use strict';
var rank_asc = function(collection){
  //return [6,5,4,3,2];
  function sortNumber(a,b)
  {
    return b-a;
  }
  return collection.sort(sortNumber);


};

module.exports = rank_asc;
