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
      if(t==1){
      var m=arr[i].indexOf("-");
      var n=arr[i].substr(m+1,1);
      var s=arr[i].substr(0,1);
      t=parseInt(n);//将字符串转成数字
      arr[i]=s;

    }
result.push({key:arr[i],count:t});
}
  return result;
}
module.exports = count_same_elements;
