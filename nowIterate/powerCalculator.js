let ticks = 0;

function powerCalculator(number, exponent) {
    if (exponent < 0) {
        ticks++;
        return "Exponent must be greater than or equal to 0."
    }
    let result = 1;
    if (exponent === 0) {
        ticks++;
        return result
    }
    for (let i = 1; i <= exponent; i++) {
        ticks++;
        result = result * number
    }

    console.log({ticks})
    return result
}

// console.log(powerCalculator(4, -1))
// console.log(powerCalculator(4, 0))
// console.log(powerCalculator(4, 2))
console.log(powerCalculator(4, 4))