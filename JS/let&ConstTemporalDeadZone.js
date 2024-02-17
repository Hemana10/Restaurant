//ReferenceErr
// console.log(a);
// let a = 10;

//SyntaxErr -> a let variable cannot be declared again in the same scope as anything var, let / const
// var a = 100; 

function x() {
    let b = 107;
    console.log(b);
    let a = 109;
    console.log(a);
}
{
    var a = 100;
    var a = 6;
    console.log(a);
}
// x();

//Syntax Err
// const b;
// b = 1000;

//Doesnt give an error
// console.log(c);
// var c = 100;
// var c = 1000;