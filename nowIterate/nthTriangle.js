function nthTriangle(number) {
    let count = 0;
    for (let i = number; i > 0; i--) {
        count = i + count
    }
    return count
}

console.log(nthTriangle(1))
console.log(nthTriangle(2))
console.log(nthTriangle(3))
console.log(nthTriangle(4))
console.log(nthTriangle(9))