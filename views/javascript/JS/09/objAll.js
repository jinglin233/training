/**
 * Created by lin on 2017/3/22.
 */
/*var i =1000;
 var j =Math.pow(1.0325,10);
 var m =i*j;
 document.write(m);*/

//计算（a-b)^2+(c-d)^2开根号,即两点之间的距离
/*var a = 100, b = 3, c = 999, d = 1;
 var i = Math.sqrt(Math.pow(a - b, 2) + Math.pow(c - d, 2));
 document.write(i);*/

/*
 //三角形面积
 var x1=2,x2=50,x3=99,y1=8,y2=3,y3=1;
 var side1 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
 var side2 = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));
 var side3 = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
 var s=(side1+side2+side3)/2;
 var area=Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
 document.write(area);*/


/*
 //某年某月有好多天
 var date= new Date(2017,4,0);
 document.write("一共有 "+date.getDate()+"天");*/

/*
//泽乐公式
var q = 22, m = 3,y=2017, j = parseInt(y/100), k = y%100;//q是某月天数，m是月份，j是世纪数，k是世纪年数
var h = (q + parseInt(26 * (m + 1) / 10) + k +parseInt(k / 4) + parseInt(j / 4) + 5 * j) % 7;
document.write(h);*/

//求平均分
/*var str="小明:87;小花:81;小红:97;小天:76;小张:74;小小:94;小西:90;小伍:76;小迪:64;小曼:76";
var time=new Date();
var i1=str.charAt(3);
var j1=str.charAt(4);
var i2=str.charAt(9);
var j2=str.charAt(10);
var i3=str.charAt(15);
var j3=str.charAt(16);
var i4=str.charAt(21);
var j4=str.charAt(22);
var i5=str.charAt(27);
var j5=str.charAt(28);
var i6=str.charAt(33);
var j6=str.charAt(34);
var i7=str.charAt(39);
var j7=str.charAt(40);
var i8=str.charAt(45);
var j8=str.charAt(46);
var i9=str.charAt(51);
var j9=str.charAt(52);
var i10=str.charAt(57);
var j10=str.charAt(58);
var p1=i1+j1,p2=i2+j2,p3=i3+j3,p4=i4+j4,p5=i5+j5,p6=i6+j6,p7=i7+j7,p8=i8+j8,p9=i9+j9,p10=i10+j10;
document.write(p1+"<br>");
document.write(p2+"<br>");
document.write(p3+"<br>");
document.write(p4+"<br>");
document.write(p5+"<br>");
document.write(p6+"<br>");
document.write(p7+"<br>");
document.write(p8+"<br>");
document.write(p9+"<br>");
document.write(p10+"<br>");
/!*var y=parseInt((p1+p2+p3+p4+p5+p6+p7+p8+p9+p10)/10);
document.write(y);*!/
var y1=Number(p1);
var y2=Number(p2);
var y3=Number(p3);
var y4=Number(p4);
var y5=Number(p5);
var y6=Number(p6);
var y7=Number(p7);
var y8=Number(p8);
var y9=Number(p9);
var y10=Number(p10);
var g=parseInt((y1+y2+y3+y4+y5+y6+y7+y8+y9+y10)/10);
document.write(time);
document.write(g);*/

//求平均值
var str="87,81,97,76,74,94,90,76,64,76";
var a=str.split(",");
var d=0,y;
for(var i=0; i<a.length;i++){
    d+=Number(a[i]);
}
y=d/a.length;
document.write(y);
