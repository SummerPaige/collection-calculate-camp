'use strict';
var single_element = function(collection){
  var even=[];
  var arr=[];
  var result=[];
  for(var i=1;i<collection.length;i+=2)
  {
    even.push(collection[i]);
  }

for(var i=0;i<even.length;i++)
{
  for(var j=i;j<even.length-1;j++)
  {
    if(even[i]==even[j+1])
    {
     arr.push(even[i]);
    }
  }
}


  for(var j=0;j<even.length;j++)
  {
if(arr.indexOf(even[j])==-1)
result.push(even[j])
  }

return result;
};
module.exports = single_element;
