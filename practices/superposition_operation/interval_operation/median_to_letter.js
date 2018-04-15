'use strict';

function median_to_letter(collection) {
   var m=0;
   var quot=Math.floor(collection.length/2);
   var q=0;
   var r=0;
   var result='';
  if(collection.length%2==0)
  {
    m=Math.ceil((collection[quot-1]+collection[quot])/2);
  }else {
    m=collection[quot];
  }
  q=Math.floor(m/26);
  r=m%26;
  result=String.fromCharCode(q+96,r+96);
  return result;
}
  module.exports = median_to_letter;
