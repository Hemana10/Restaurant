// Simple Explanation

function multiply(x, y) {
    console.log(x * y);
}

// Currying using bind Fn
const multiplyBy2 = multiply.bind(this, 2);
multiplyBy2(3);
multiplyBy2(4);

const multiplyBy3 = multiply.bind(this, 3);
multiplyBy3(3);
multiplyBy3(4);

// Currying using closures 
function multiply(x) {
    // you can return or pass an anonymous fn but not declare it independently as a fn statement.
    return function (y) {
        console.log(x * y);
    }
}

const multiplyBy4 = multiply(4);
multiplyBy4(10);
multiplyBy4(4);


// https://javascript.plainenglish.io/javascript-currying-comprehensive-guide-e69c47497309
