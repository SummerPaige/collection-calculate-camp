'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
var result=[];
var quot=0;
var rem=0;
var str2='';
if(number_a<=number_b)
{
  for(var i=number_a;i<=number_b;i++)
  {
    if(i<=26)
    {
      str2=String.fromCharCode(i+96);
      result.push(str2);
    }
    else
    {
      quot=i/26;
      rem=i%26;
      if(rem!=0)
      {str2=String.fromCharCode(quot+96,rem+96);
      }
      else{str2=String.fromCharCode(quot+95,122);}
      result.push(str2);
    }
  }
}
else
{
  for (var i=number_a;i>=number_b;i--)
  {
    if(i<=26)
    {
      str2=String.fromCharCode(i+96);
      result.push(str2);
    }
    else
    {
      quot=i/26;
      rem=i%26;
      if(rem!=0)
      {str2=String.fromCharCode(quot+96,rem+96);
      }
      else{str2=String.fromCharCode(quot+95,122);}
      result.push(str2);
    }
  }
}
return result;
}

module.exports = get_letter_interval_2;
