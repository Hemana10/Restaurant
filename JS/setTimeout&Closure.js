// How setTimeout works, JS doesnt wait for the time duration instead attaches the timeout period to the fn and later adds it back to the call stack once timeout is finished - want to understand how it works in call stack

// function x() {
//     var i = 10;
//     setTimeout(()=>{
//         console.log(i);
//     },1000);
//     console.log('Namaste');

// }

// x();
// o/p first Namaste is logged then i value

// function x() {
//     for(let i = 0; i <= 5; i++) { // change into var and see what happens
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log('Namaste');
// }

// x();

// achieving block scope with var to get individual i value referenced with the closure
function x() {
    for(var i = 0; i <= 5; i++) { 
        function close(x) {
            setTimeout(() => {
                console.log(x);
            }, x * 1000);
        }
        close(i); // this helps create a block scope of i which will be referenced by the setTimeout closure 
    }
    console.log('Namaste');
}

x();