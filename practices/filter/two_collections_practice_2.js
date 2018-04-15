'use strict';

function choose_no_common_elements(collection_a, collection_b) {
var l=collection_a.length;
var temp=collection_b;
var arr=[];
while(l--)
{
  if(collection_b.indexOf(collection_a[l])< 0)
  {
    arr.push(collection_a[l]);
  }else{
    temp.splice(temp.indexOf(collection_a[l]),1)
  }
}
var result= arr.concat(temp).reverse();

return result;
  }
module.exports = choose_no_common_elements;
