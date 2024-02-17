function memoize(fn) {

    let callCount = 0;
    let memoizedResults = {};
    return function (...args) {
        if (args.length === 0) {
            return callCount;
        } else {
            let keyVal = args.toString();
            let val;
            if (!memoizedResults[keyVal]) {
                val = fn(...args);
                callCount++;
                memoizedResults[keyVal] = val;
                return val;
            } else {
                return memoizedResults[keyVal];
            }
        }
    }
}

const memoizedFn = memoize(function (a, b) {
    return a + b;
});

console.log(memoizedFn(0, 0));
console.log(memoizedFn(0, 0));
console.log(memoizedFn());