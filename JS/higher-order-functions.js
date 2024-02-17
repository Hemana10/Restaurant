// higher order fns
function x() {
    console.log('Namaste');
}

function y(x) {
    x();
}

// Example to create modular code

const radius = [2, 1, 3, 4];

const calculateArea = function (radius) {
    const output = [];
    for(i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }

    return output;
}

console.log(calculateArea(radius));

const calculateCircumference = function (radius) {
    const output = [];
    for(i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }

    return output;
}

console.log(calculateCircumference(radius));

const calculateDiameter = function (radius) {
    const output = [];
    for(i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }

    return output;
}

console.log(calculateDiameter(radius));

// Above code is not at all modular, we are repeating a lot of code 
// Modular way of writing code is to extract functionalities separately into fns, and only handle one singular purpose with a fn.

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

// const calculate = function (radius, logic) {
//     const output = [];
//     for(i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]));
//     }

//     return output;
// }

// Above implementation is a modular way of writing a fn, the functionalities are abstracted into separate functions and the the functions are being reused.

// The above implementation of calculate is similar to the way map fn works, map is a higher order fn

console.log(radius.map(area));

// To make calculate fn more like map fn i.e, to be able to call a fn on the array.

Array.prototype.calculate = function (logic) {
    const output = [];
    for(i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }

    return output;
}

console.log(radius.calculate(area));

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));


