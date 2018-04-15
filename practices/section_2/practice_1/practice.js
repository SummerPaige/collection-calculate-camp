function count_same_elements(collection) {
  //在这里写入代码
  var result=[];
  var arr=Array.from(new Set(collection));

  for(var i=0;i<arr.length;i++){
    var t=0;
    for(var j=0;j<collection.length;j++){
      if(arr[i]==collection[j]){
        t++;
      }

    }
result.push({key:arr[i],count:t});
  }

return result;
}

module.exports = count_same_elements;
