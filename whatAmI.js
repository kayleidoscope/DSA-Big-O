//this function takes a single number as an argument
function isWhat(n) {
    let ticks = 1;
    //if the number is less than two
    //or if the remainer of n divided by 1 is zero (meaning it's a whole number),
    //then...
    if (n < 2 || n % 1 !== 0) {
        //...return false from the function
        ticks ++;
        return {result: false, ticks};
    }
    //if the number is 2 or larger and is a whole number, iterate from 2 to the number
    for (let i = 2; i < n; ++i) {
        ticks ++;
        //stop when the number divided by is returns no remainder and return false
        if (n % i === 0) {result: false, ticks};
    }
    return {result: true, ticks};
}

console.log(1, isWhat(1))
console.log(2, isWhat(2))
console.log(5, isWhat(5))
console.log(10, isWhat(10))
console.log(101, isWhat(101))
console.log(1000, isWhat(1000))

/*

It finds prime numbers. Its Big O is O(n) because it will run one more time for each larger number than 2 entered.

*/