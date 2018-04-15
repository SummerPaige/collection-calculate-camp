'use strict';
var collection_a=[1,2,3,4,5];
function collect_all_even(collection) {
  //在这里写入代码
  var collection_b=[];
  for(var i=0;i<=collection.length;i++)
  if (collection[i]%2==0) {
    collection_b.push(collection[i]);
  }
  //console.log(collection_b);不需要打印
  return collection_b;
}
 //collect_all_even([1,2,3,4,5]);不需要调用
module.exports = collect_all_even;


/*方法二
let result=[];
for (let item in collection){
if(item%2==0){
result.push(item);
}
}
return result;
*/
/*方法三
return collection.filter((item)=>(item%2==0));
*/
