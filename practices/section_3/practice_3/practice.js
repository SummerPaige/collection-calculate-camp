function create_updated_collection(collection_a, object_b) {
  //在这里写入代码

  var collection_c=[];
  var result=[];
  var collection=[];

function c(){
  var arr=Array.from(new Set(collection_a));

  for(var i=0;i<arr.length;i++){
    var t=0;
    for(var j=0;j<collection_a.length;j++){
      if(arr[i]==collection_a[j]){
        t++;
      }
    }
collection_c.push({key:arr[i],count:t});
  }
result=collection_c;
return result;
}
function newc(){
  var arr=result;
  var quot=0;
  for(var i=0;i<collection_c.length;i++)
  {
    for(var j=0;j<object_b.value.length;j++)
    {
      if(collection_c[i].key.indexOf(object_b.value[j])<0)
      {
        arr[i].count=arr[i].count;
      }else{
        quot=parseInt(arr[i].count/3);
        arr[i].count=arr[i].count-quot;}
    }
  }
  collection=arr;

  }
  c(collection_a);
  newc(collection_c,object_b);
  return collection;
}


module.exports = create_updated_collection;
