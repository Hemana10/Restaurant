const cart = ['shirt', 'skirt', 'pants'];

const promise = createOrder(cart); // orderId
console.log(promise);

promise
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(err => console.log(err.message))
    .then(function (orderId) {
        console.log('No matter what happens I will be called');
    });

// Creating/Producing of a Promise

function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {
        // createOrder
        // validateCart
        // orderId

        if(!validateCart(cart)) {
            const err = new Error('Cart is not valid'); 
            reject(err);
        }

        // logic for createOder success for success handling
        const orderId = '12345';
        if(orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    // proceedToPayment - paymentInfo
    return new Promise((resolve, reject) => {
        resolve('Payment Successful');
    });
}

function validateCart(cart) {
    return false;
}
