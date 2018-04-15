'use strict';
var even_group_calculate_average = function(collection){
var even=[];
var even2=[];
var result=[];
var oneNum=[];
var twoNum=[];
var threeNum=[];
var a=0;
var b=0;
var c=0;

for(var i=1;i<collection.length;i+=2)
{
  even.push(collection[i]);
}

for(var j=0;j<even.length;j++)
{
  if(even[j]%2!=0)
  {
    result=[0];
  }
  else{
  even2=even.filter(function(item){
     return item%2==0;
       });
       for( var j=0;j<even2.length;j++)
       {
        if(0<=even2[j]&&even2[j]<10)
            {oneNum.push(even2[j]);
             var sum=oneNum.reduce(function(x,y){
               return x+y;
             });
             a=sum/oneNum.length;
           }

            else if(10<=even2[j]&&even2[j]<100)
            { twoNum.push(even2[j]);
              var sum=twoNum.reduce(function(x,y){
                return x+y;
              });
              b=sum/twoNum.length;
            }

            else{threeNum.push(even2[j]);
              var sum=threeNum.reduce(function(x,y){
                return x+y;
              });
              c=sum/threeNum.length;
            }
      }
        if(a==0&b==0){
          result.push(c);
        }else{ result.push(a,b,c);}
     }
  }
return result;
};
module.exports = even_group_calculate_average;
