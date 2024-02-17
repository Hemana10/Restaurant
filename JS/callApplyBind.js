// this ref => ref to window obj and everything outside of fns.
var fn = 'ok';
var ln = 'notok';

// obj1 
name1 = {
    fn: 'Hemana',
    ln: 'Reddy',
    printFullName: function (attitude, gender) {
        console.log(this.fn + ' ' + this.ln + ' is ' + attitude + ' ' + gender);
    }
}

// obj2 
name2 = {
    fn: 'Michael',
    ln: 'Scott'
};

// obj3
name3 = {
    fn: 'moni',
    ln: 'sha'
}

// printFullName = function (attitude, gender) {
//     console.log(this.fn + ' ' + this.ln + ' is ' + attitude + ' ' + gender);
// }
// Function borrowing using call, apply, bind

// host obj context
// name1.printFullName('crazy', 'dumbo');

// Call -> takes in this ref and then the arguments as comma separated values
// let c1 = name1.printFullName.call(name3, 'nice', 'girl');
// name1.printFullName.call(name2, 'crazy', 'boy');
// name1.printFullName.call(this, 'crazy', 'boy');

// Apply -> similar to call, it just takes the arguments as an array
// name1.printFullName.apply(name3, ['nice', 'girl']);
// name1.printFullName.apply(name2, ['crazy', 'boy']);
// name1.printFullName.apply(this, ['crazy', 'boy']);

// Bind -> same as call, but it doesnt immediately call the fn, instead it returns a new fn which is binded with the values passed.
let pf1 = name1.printFullName.bind();
// let pf2 = name1.printFullName.bind(name2, 'crazy');
// let pf3 = name1.printFullName.bind(this, 'crazy', 'boy');
pf1('nice', 'girl');
// pf2('boy');
// pf3();

// Definitions
// Call is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.

// Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.

// Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.





