function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  /*方法一：以下是正确的
  var arr=collection_a;
var result=[];
for(var i=0;i<collection_a.length;i++)
{
  for(var j=0;j<object_b.value.length;j++)
  {
    if(collection_a[i].key.indexOf(object_b.value[j])<0)
    {
      arr[i].count=arr[i].count;
    }else{arr[i].count=arr[i].count-1;}
  }
}

return arr;
*/
//方法二
var result=[];
for(var i=0;i<collection_a.length;i++)
{
for(var j=0;j<object_b.value.length;j++)
{
  if(collection_a[i].key==object_b.value[j])
  {
    collection_a[i].count=collection_a[i].count-1;
  }else{ collection_a[i].count=collection_a[i].count;}
}
}
return collection_a
}

module.exports = create_updated_collection;
