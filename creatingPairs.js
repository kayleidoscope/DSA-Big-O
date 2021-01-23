function createPairs(arr) {
    let ticks = 1;
    for (let i = 0; i < arr.length; i++) {
        ticks ++;
        for(let j = i + 1; j < arr.length; j++) {
            ticks ++
            console.log(arr[i] + ", " +  arr[j]);
        }
    }
    console.log(ticks)
}

console.log(createPairs([1, 2, 3, 4, 4]))
console.log(createPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]))