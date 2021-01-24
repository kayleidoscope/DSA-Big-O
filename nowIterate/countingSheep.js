function countingSheep(numOfSheep) {
    for (let i = numOfSheep; i > 0; i--) {
        let message = `${i}: Another sheep jumps over the fence.`
        console.log(message)
    }
    return "All sheep jumped over the fence."
}

console.log(countingSheep(10))