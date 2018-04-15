function create_updated_collection(collection_a, object_b) {
  //在这里写入代码

var arr=collection_a;
var quot=0;
for(var i=0;i<collection_a.length;i++)
{
  for(var j=0;j<object_b.value.length;j++)
  {
    if(collection_a[i].key.indexOf(object_b.value[j])<0)
    {
      arr[i].count=arr[i].count;
    }else{
      quot=parseInt(arr[i].count/3);
      arr[i].count=arr[i].count-quot;}
  }
}

return arr;
}

module.exports = create_updated_collection;
