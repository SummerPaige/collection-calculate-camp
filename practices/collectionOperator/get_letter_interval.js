'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var result=[];
  var str2='';
  var rem=0;
  if (number_a<=number_b)
  {
  for(var i=number_a;i<=number_b;i++)
  {
    rem=i%26;
    if(rem!=0)
    {str2=String.fromCharCode(rem+96);
    result.push(str2);}
    else
    {
    str2=String.fromCharCode(122);
    result.push(str2);
    }
  }
  }
  else
  {
    {
    for(var i=number_a;i>=number_b;i--)
    {
      rem=i%26;
      if(rem!=0)
      {
        str2=String.fromCharCode(rem+96);
       result.push(str2);
     }
     else
     {
       str2=String.fromCharCode(122);
       result.push(str2);
     }
    }
    }
  }
  return result;
}

module.exports = get_letter_interval;
