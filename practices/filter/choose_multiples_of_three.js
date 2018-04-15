'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var result=collection.filter(function(item){
    return item%3==0;
  });
  return result;
}

module.exports = choose_multiples_of_three;
