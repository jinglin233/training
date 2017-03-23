/**
 * Created by lin on 2017/3/22.
 */
//数组及长度
/*var array1=[1,2,3,4,5],array2=["nice","to","meet","you","!"],array3=[{x:1},{y:2}],array4=[true,false,null,undefined]
 array1.length=3;
 array2.length=3;
 array3.length=3;
 array4.length=3;

 console.log(array1);
 console.log(array2);
 console.log(array3);
 console.log(array4);*/
/*

 for(var i=1 ;i<=array1.length in array1;){
 console.log(i);
 }
 */
/*

 //添加数组
 var array1 = ["bananna", "appale", "manggo"];
 var array2 = [];
 array1.push("daudhia", "233333");
 array2.push("daudhia", "233333");
 array1.unshift("shuigauo");
 console.log(array1);
 console.log(array2);
 */
//数组求菲波那切数列
/*var array=[0,1];
 for ( var i=0;i<=20;i++){
 array.push(array[i]+array[i+1]);
 }
 console.log(array);*/

/*
var array=[1000,498];
for(var i=0;i<498;i++){
    array.push((array[i])%(array[i+1]));
    if(((array[i])%(array[i+1]))==0){
        break;
    }
}
document.write(array[i+1]);*/

var m=2;
for (var n=1,p=1;n<=3;n++){
     p=p*m;
}
document.write(p);
