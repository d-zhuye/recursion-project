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