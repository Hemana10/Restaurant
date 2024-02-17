function a() {
    var x = 0; var z = 100;
    return function b() {
        console.log(x);
    }
}

var y = a();

y();