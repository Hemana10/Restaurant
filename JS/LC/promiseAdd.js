var addTwoPromises = async function (promise1, promise2) {
    return Promise.all([promise1, promise2])
        .then((values) => values.reduce((val, sum) => sum + val, 0));
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log);