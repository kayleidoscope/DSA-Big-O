let ticks = 0;

function countingSheep(numOfSheep) {
    for (let i = numOfSheep; i > 0; i--) {
        let message = `${i}: Another sheep jumps over the fence.`
        ticks++
        console.log(message)
    }
    console.log({ticks})
    return "All sheep jumped over the fence."
}

console.log(countingSheep(15))