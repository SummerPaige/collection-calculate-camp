'use strict';
var even_asc_odd_desc = function(collection){
  var even=[];
  var evensorted=[];
  var odd=[];
  var oddsorted=[];
  var result=[];

  function sortNumber1(a,b){
    return a-b;
  }

  function sortNumber2(a,b){
    return b-a;
  }

for(var i=0;i<collection.length;i++)
{
  if(collection[i]%2==0)
  {
    even.push(collection[i]);
    evensorted= even.sort(sortNumber1);
  }else{
    odd.push(collection[i]);
    oddsorted= odd.sort(sortNumber2);
  }
}

 result=evensorted.concat(oddsorted);
return result;
};
module.exports = even_asc_odd_desc;
