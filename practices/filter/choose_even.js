'use strict';

function choose_even(collection) {
  //在这里写入代码
  /*var result=[];
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%2==0)
    { result.push(collection[i]);}
  }
  return result;*/
  var result=collection.filter(function(item){
    return item%2==0;
  });
  return result;
}

module.exports = choose_even;
