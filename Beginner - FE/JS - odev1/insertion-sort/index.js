function insertionSort(arr, n) {
    let i;
    let key;
    let j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

function printArray(arr, n) {
    let i;
    for (i = 0; i < n; i++)
        console.log(`${arr[i]} `);
}

// Driver code
const arr = [12, 11, 13, 5, 6];
const n = arr.length;

console.log(arr);

insertionSort(arr, n);

printArray(arr, n);
