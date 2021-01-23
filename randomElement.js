function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/*

The Big O is O(1) because the function will only ever look for one value and return it.

*/