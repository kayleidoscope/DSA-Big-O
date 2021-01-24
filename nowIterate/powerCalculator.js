function powerCalculator(number, exponent) {
    if (exponent < 0) {
        return "Exponent must be greater than or equal to 0."
    }
    let result = 1;
    if (exponent === 0) {
        return result
    }
    for (let i = 1; i <= exponent; i++) {
        result = result * number
    }
    return result
}

console.log(powerCalculator(4, -1))
console.log(powerCalculator(4, 0))
console.log(powerCalculator(4, 2))
console.log(powerCalculator(4, 4))