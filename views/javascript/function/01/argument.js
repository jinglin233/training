/**
 * Created by lin on 2017/3/23.
 */
function text(x, y) {
    var a = 2 * arguments[0] + 3 * arguments[1];
    return a
}
console.log(text(2, 3));

function findMax() {
    var i, max = 500;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] < max) {
            max = arguments[i];
        }
    }
    console.log(max);
}

findMax(1, 123, 500, 115, 44, 88);
