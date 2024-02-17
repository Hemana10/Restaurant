const arr = [5, 1, 3, 2, 6];

// Map Function

// Double - [10, 2, 6, 4, 12];

// Triple - [15, 3, 9, 6, 18];

// Binary - ["101", "1", "11", "10", "110"];

// Ways of writing map fns

function binary(x) {
    return x.toString(2);
}

console.log(arr.map(binary));
// OR
console.log(arr.map(function double(x) {
    return 2 * x;
}));
// OR
// we can skip the return and {} brackets if there is only one statement, it automatically returns that value.
console.log(arr.map((x) => {
    return 3 * x;
}));

console.log('********************************************************');

// Filter Function

function isOdd(x) {
    return x % 2;
}

console.log(arr.filter(isOdd));

console.log(arr.filter((x) => x > 4));

console.log('********************************************************');

// Reduce Function

function findSum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

// acc - accumulator = sum value
// curr - current value = arr[i] value
const op = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
// 0 is the inital value we provide

console.log(op);

function findMax(arr) {
    let max = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));

const max = arr.reduce((acc, curr) => {
    if (curr > acc) {
        acc = curr
    }
    return acc;
}, 0);

console.log(max);

console.log('********************************************************');

// Advanced Examples

const users = [
    { firstName: 'akshay', lastName: 'saini', age: 25 },
    { firstName: 'donald', lastName: 'trump', age: 75 },
    { firstName: 'elon', lastName: 'musk', age: 50 },
    { firstName: 'hemana', lastName: 'reddy', age: 25 },
];

// List of full names

const fullNames = users.map((user) => {
    return user.firstName + ' ' + user.lastName;
});

console.log(fullNames);

// How many users have a particular age like frequency of an age
// { 25: 2, 75: 1, 50: 1 }

const ageFrequency = users.reduce((acc, user) => {
    if (acc[user.age]) {
        acc[user.age] = ++acc[user.age];
    } else {
        acc[user.age] = 1;
    }
    return acc;
}, {});

console.log(ageFrequency);

// First name of all the people whose age is less than 30

const below30 = users.filter((user) => user.age < 30).map(user => user.firstName);

console.log(below30);

const below30reduce = users.reduce((acc, user) => {
    if (user.age < 30) {
        return [...acc, user.firstName];
    }
    return acc;
}, []);

console.log(below30reduce);
