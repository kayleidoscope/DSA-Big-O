function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

console.log(naiveSearch([1, 5, 2, 3, 4], 5))
console.log(naiveSearch([1, 2, 3, 4, 5], 6))

/*

The Big O notation is O(n) because you may have to access every value in the array (but you might not have to).

*/