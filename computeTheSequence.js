//The function takes a number as an argument.
function compute(num) {
    //An empty array is set.
    let result = [];
    //A loop is set. i will start at 1 and it will go as long as i is less than or equal
    //to the number given as an argument. i will increase by 1 each go round.
    for (let i = 1; i <= num; i++) {
        //If i equals 1...
        if (i === 1) {
            //...push 0 into the result array.
            result.push(0);
        }
        //Else if i equals 2...
        else if (i === 2) {
            //....push 1 into the result array.
            result.push(1);
        }
        //In any other case, ...
        else {
            //... push the sum of the number in the array two indices behind i and 3 indices behind i into the array.
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    //return the result.
    return result;
}

console.log(compute(1))
console.log(compute(6))
console.log(compute(100))



/*

This function creates the Fibonacci sequence. Its runtime complexity is O(n) because it will interate through
the number given as the argument.

*/