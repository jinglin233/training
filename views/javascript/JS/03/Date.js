/**
 * Created by lin on 2017/3/21.
 */

 var d = new Date().getDay();
 switch (d) {
 case 0:
 x = "今天是星期天";
 console.log(x);
 break;
 case 1:
 x = "今天是星期一";
 console.log(x);
 break;
 case 2:
 x = "今天是星期二";
 console.log(x);
 break;
 case 3:
 x = "今天是星期三";
 console.log(x);
 break;
 case 4:
 x = "今天是星期四";
 console.log(x);
 break;
 case 5:
 x = "今天是星期五";
 console.log(x);
 break;
 case 6:
 x = "今天是星期六";
 console.log(x);
 break;
 }
var x=null;
var i = typeof x;
switch (i) {
    case "number":
        console.log("x是一个number");
        break;

 case "boolean":
        console.log("x是一个boolean");
        break;

 case "undefined":
        console.log("x是一个undefined");
        break;

 case "string":
        console.log("x是一个string");
        break;

 case "object`":
        console.log("x是一个null");
        break;


}
