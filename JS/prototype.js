// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

// The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. The standard way to access an object's prototype is the Object.getPrototypeOf() method.

// When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.

// Whenever we create any type of object, JS assign a special object to this object so we get some additional functionalities.
// This additional functionalities is stores in __proto__ object

let arr = [12, 12];
// arr.__proto__ is same the Array.prototype object
// arr.__proto__.__proto__ is same as Object.prototype
// arr.__proto__.__proto__.__proto__ is null
// This is called as prototype chaining

// this is why everything in js is an object ultimately
// initially JS will look for whatever we are trying to access within its own object and then its starts looking for it within the further prototype object 

let object = {
    name: 'Hemana',
    city: 'Bangalore'
};
// object.__proto__ is same as Object.prototype
// arr.__proto__.__proto__.__proto__ is null

function fun() {
    // ..
}
// fun.__proto__ is same the Function.prototype object
// fun.__proto__.__proto__ is same as Object.prototype
// fun.__proto__.__proto__.__proto__ is null

// we do things like assign new functionality to all arrays by
// defining it within Array.prototype.fnname, this is so that the newly added functionality will be accessible by every array 