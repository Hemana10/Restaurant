function a() {
    let b = 10;
//     function x() {
//         console.log(x);
//    }
    c();
    function c() {
        console.log(x());
        // a(); can also access fns from parents lexical Env 
    }
}

function x() {
    let g = 9;
    console.log(g);
}
 
a();

