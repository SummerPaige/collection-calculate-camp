'use strict';

function even_to_letter(collection) {
  //在这里写入代码
  var result=[];
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%2==0)
    {
      var letter=String.fromCharCode(collection[i]+96);
      result.push(letter);
    }
  }

  return result;
}

module.exports = even_to_letter;
