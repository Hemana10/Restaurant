const cart = ['shoes', 'pants', 'kurti'];

createOrder(cart, function (orderId) {
    proceedToPayment(orderId);
}); // return - orderId

const promise = createOrder(cart);

// promise will hold - initially { data: undefined }
//  when it gets response { data: orderDetails }

// Issue inversion of control solution - using Promises
// attaching a callback function 
promise.then(function (orderId) {
    proceedToPayment(orderId);
});

// const GITHUB_API = 'https://api.github.com/users/akshaymarch7';

// const users = fetch(GITHUB_API);

// console.log(users);

// callback hell - using promise chaining

api.createOrder(cart, () => {
    api.proceedToPayment(() => {
        api.showOrderSummary(() => {
            api.updateWallet();
        })
    })
});

// The above code can be handled using promises

api.createOrder(cart)
    .then(function (orderId) {
        return api.proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        return api.showOrderSummary(paymentInfo);
    })
    .then(function (paymentInfo) {
        return api.updateWallet(paymentInfo);
    });

// OR we can also make use of arrow fns, and we can remove return and {} if it is only one statement

api.createOrder(cart)
    .then(orderId => api.proceedToPayment(orderId))
    .then(paymentInfo => api.showOrderSummary(paymentInfo))
    .then(paymentInfo => api.updateWallet(paymentInfo));

