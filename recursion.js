function fibs(n) {
    const arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}

console.log(fibs(8));

function figsRec(n) {
    if (n <= 1) {
        return [0, 1];
    } else {
        const prevFib = figsRec(n - 1);
        const length = prevFib.length;
        prevFib.push(prevFib[length - 1] + prevFib[length - 2]);
        return prevFib;
    }
}

console.log(figsRec(8));

function merge(leftArr, rightArr) {
    const sortedArray = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArray.push(leftArr.shift());
        } else {
            sortedArray.push(rightArr.shift());
        }
    }
    return [...sortedArray, ...leftArr, ...rightArr];
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        const middle = Math.floor(arr.length / 2);
        const leftArray = arr.slice(0, middle);
        const rightArray = arr.slice(middle, arr.length);
        return merge(mergeSort(leftArray), mergeSort(rightArray));
    }
}

const arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
const arr2 = [105, 79, 100, 110];

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
