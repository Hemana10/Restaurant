function counter() {
    var count = 0;
    function incrementCounter() {
        count++;
        console.log(count);
    }
    return incrementCounter;
}
var counter1 = counter();
counter1();
counter1();
var counter2 = counter();
counter2();
counter2();

// var title = 'Hemana';
// const video = {
//     title: 'g',
//     tags: ['a', 'b'],
//     showTags: () => {
//         ['a'].forEach((tag) => {
//             console.log(this.title, tag);
//         });
//     }
// }

// video.showTags();

// const book = {
//     title: 'book'
// };

// let test = video.showTags.bind(book);
// // console.log(test);
// test();
