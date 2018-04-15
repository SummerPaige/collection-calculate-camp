'use strict';
var number_map_to_word_over_26 = function(collection){
  //return ['a','m','aa','ad','y','aa'];
  var result=collection.map(function(element,index,collection){
    if(element<=26)
    {
      return String.fromCharCode(element+96);
    }else
    {
      var quot=element/26;
      var rem=element%26;
      if(rem!=0)
      {
        return String.fromCharCode(quot+96,rem+96);
      }else {

        return String.fromCharCode(quot+95,122);
      }
    }
  });

  return result;
};

module.exports = number_map_to_word_over_26;
