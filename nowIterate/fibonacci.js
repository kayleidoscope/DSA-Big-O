let ticks = 0;

function fibonacci(number) {
    let sequence = []
    for (let i = 1; i <= number; i++) {
        if (i === 1) {
            ticks++;
            //...push 0 into the result array.
            sequence.push(0);
        }
        //Else if i equals 2...
        else if (i === 2) {
            ticks++;
            //....push 1 into the result array.
            sequence.push(1);
        }
        //In any other case, ...
        else {
            ticks++;
            //... push the sum of the number in the array two indices behind i and 3 indices behind i into the array.
            sequence.push(sequence[i - 2] + sequence[i - 3]);
        }
    }
    //return the result.
    console.log({ticks})
    return sequence;
}

// console.log(fibonacci(1))
// console.log(fibonacci(3))
console.log(fibonacci(10))