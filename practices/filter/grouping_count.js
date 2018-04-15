'use strict';

function grouping_count(collection) {

      return collection.reduce(function(p,n){
          if(!p[n]){
              p[n] = 1;
          }else{
              p[n] += 1
          }
          return p
      },{});

  //在这里写入代码
}

module.exports = grouping_count;
