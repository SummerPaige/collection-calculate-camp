'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var result=[];
  if(number_a==number_b)
  {
    result=[number_a];
  }
  else if (number_a<number_b)
  {
    for(var i=number_a;i<=number_b;i++)
    {
       result.push(i);
    }
  }
  else
  {
   for(var i=number_a;i>=number_b;i--)
   {
     result.push(i);
   }
  }
  return result;
}

module.exports = get_integer_interval;
