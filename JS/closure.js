// function y() {
//     var a = 10;
//     function x() {
//         console.log(a);
//     }
//     return x;
// }

// var a = 100;
// var z = y();
// z();
// Console O/P = 10

function y() {
    var a = 10;
    function x() {
        console.log(a);
    }
    a = 100;
    return x;
}

var a = 100;
var z = y();
z();

// the closure will just hold the reference to 'a' not the actual code is stored in closure just the values and the closure values do not get garbage collected.
// Console O/P = 100

