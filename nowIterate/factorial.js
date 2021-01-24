function factorial(number) {
    let result = 1;
    for (let i = number; i > 0; i--) {
        result = i * result
    }

    return result
}

console.log(factorial(5))