// Algorithm 
// - insert a element in its position and then move the rest towards the position of the element

const arr = [9, 6, 5, 0, 8, 2, 7, 1, 3, 4];

for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        console.log(arr);
    }
    arr[j + 1] = key;
}