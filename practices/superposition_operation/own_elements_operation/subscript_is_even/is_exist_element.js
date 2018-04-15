'use strict';
var is_exist_element = function(collection,element){
  var result='';
  var even=[];
for(var i=0;i<collection.length;i+=2)
{
  even.push(collection[i]);
};
console.log(even);
if(even.indexOf(element)<0){
  result=false;
}else{result=true;}
return result;
};
module.exports = is_exist_element;
