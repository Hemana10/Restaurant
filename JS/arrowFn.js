// Syntax

// var x = (params) => {
//     code
// };

// to return single 
// x = () => code;
// single param 
//  x = param => code;
// No param -> we need to use ()
// x = () => {}; 

// Doesnt not get a this reference -> refers to whatever context it is present, whichever lexical scope they are present in

// Arrow functions don’t have their own this, and they don’t redefine the value of this within the function.

// function Person() { 
//     this.age = 0;
// A normal fn here would not be refering to the window object, because the function keyword redefines the scope and changes the this reference.

// These concerns come up with cb fn within functions
//     setTimeout(() => console.log(this.age), 0);
// }

// var p = new Person();

// console.log(p);

var name = "Suprabha"
let newObject = {
    name: "Hemana",
    anotherObj: function () {
        let name = 'supi';
        const arrowFunc = () => {
            // setTimeout(() =>console.log(this.name));
            console.log(this.name);
        };

        const regularFunc = function () {
            // setTimeout((() => {console.log(this.name)}).bind(this));
            console.log(this.name)
        };

        arrowFunc();
        regularFunc();
    }
}
newObject.anotherObj();
// newObject.anotherObj.regularFunc(); // supi