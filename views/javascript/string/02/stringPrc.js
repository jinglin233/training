/**
 * Created by lin on 2017/3/21.
 */
/*
//倒序显示abcdefg
 var string="abcdefg";
 var i=string.length;
 i=i-1;
 for (var x = i; x >=0; x--)
 {
 document.write(string.charAt(x));
 }


//var number=[1, 10, 31, 33, 37, 48, 60, 70, 80]，使用indexof()方法寻找数组中指定的数字，找到就显示索引值，没有找到就显示-1

/*var number=[1,10,31,33,37,48,60,70,80];
if{
    number.indexOf(1, 0);
    console.log()
}*/

var str1="abcddaefgb";
var str2=[];
for(var i in str1) {
    if (str1.indexOf(str1.charAt(i)) == i) {
        str2.push(str1[i]);
    }
}
document.write("<br/>"+str2.join(''));

for(var i=100;i<999;i++){
    var a=parseInt(i/100);
    var b=parseInt(i/10%10);
    var c=i%10;
    if(a*a*a+b*b*b+c*c*c==i){
        document.write("<br/>"+i);
    }
}

