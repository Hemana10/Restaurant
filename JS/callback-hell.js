// Callback Functions 

console.log('Namaste');

setTimeout(() => {
    console.log('JS');
}, 5000);

console.log('S2');

// Callback Hell -  Pyramid of Doom
// This makes our code grow horizontally instead of vertically

const cart = ['shirt', 'skirt', 'tops'];

api.createOrder(cart, () => {
    api.proceedToPayment(() => {
        api.showOrderSummary(() => {
            api.updateWallet();
        })
    })
});