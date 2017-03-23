/**
 * Created by lin on 2017/3/23.
 */
/*
 var a=[1,2,3];
 a.concat(4,5);//合并的是第一个
 console.log(a);
 a.reverse();
 [3, 2, 1]//改变，反向输出新数组；
 */

/*
 var a=[9,4,2,45];
 undefined
 a.sort();
 [2, 4, 45, 9]//不是升序排列，转成Unicode/A排列*/

/*
 var a = [1, 2, 3, 4, 5, 6, 7, 8];
 a.splice(0,3);
 a.splice(3);
 a.splice(1,-1);
 a.splice(-3,-2);
 a.splice(2,0,'a','b');
 a.splice(3,4,[1,2],5);*/

//forEach
/*var a = [1, 2, 3, 4, 5, 6];
var c = [], b;
a.forEach(function (value) {
    b = value + 1;
    c.push(b);
});
console.log(c);*/

//map
/*var a = [1, 2, 3, 4, 5, 6];
c=a.map(function (b) {
    return b*b;
});
console.log(c);*/

//filter
/*var a=[3,35,7,42,14,2];
 var c=a.filter(function (b) {
 return b<30
 });
 console.log(c);*/

var a=[3,35,7,42,14,2];
var c=a.filter(function (b) {
    return b%2==0;
});
console.log(c);