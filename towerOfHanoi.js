const towerOfHanoi = function(tower) {
    
    function restacking(tower1, tower2, tower3) {
        console.log(tower1, tower2, tower3)
        //Base case
        if (tower1[tower1.length - 1].length === 1) {
            const smallestPiece = tower1.shift()
            tower2.unshift(smallestPiece)
            return [tower1, tower2, tower3]
        }
    }
    const leftTower = tower
    const middleTower = []
    const rightTower = []
    return restacking(leftTower, middleTower, rightTower)
}

const baseTower = [
    "-"
]

console.log(towerOfHanoi(baseTower))