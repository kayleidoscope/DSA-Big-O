const towerOfHanoi = function(tower) {
    
    function restacking(tower1, tower2, tower3) {
        console.log(tower1, tower2, tower3)
        //Base case
        if (tower3.length === tower.length || tower2.length === tower.length) {
            return [tower1], [tower2], [tower3]
        }
        //General case

        //find the little piece and move it
        let smallestPiece;
        if (tower1[0] === "-") {
            smallestPiece = tower1.shift()
            tower2.unshift(smallestPiece)
        } else if (tower2[0] === "-") {
            smallestPiece = tower2.shift()
            tower3.unshift(smallestPiece)
        } else if (tower3[0] === "-") {
            smallestPiece = tower3.shift()
            tower1.unshift(smallestPiece)
        }
    
        //find out which tower has the largest moveable piece

        let largestPiece;
        let topPieces = [{tower: 1, piece: tower1[0]}, {tower: 2, piece: tower2[0]}, {tower: 3, piece: tower3[0]}]
        let narrowing = topPieces.filter(piece => (piece.piece && piece.piece.length !== 1))
        // console.log(narrowing)
        largestPiece = narrowing[0]


        //find where to put the top piece (where the current top piece is either)
        //a length of 2 or bigger or there is no piece
        let thirdPegObject = topPieces.filter(piece => (!piece.piece || piece.piece.length >=2))

        let thirdPeg = thirdPegObject[0].tower

        if (thirdPeg === 1) thirdPeg = tower1
        if (thirdPeg === 2) thirdPeg = tower2
        if (thirdPeg === 3) thirdPeg = tower3

        let towerOfPiece;
        let movePiece;
        if (largestPiece.tower = 1) {
            movePiece = tower1.shift()
            thirdPeg.unshift(movePiece)
        }
        if (largestPiece.tower = 2) {
            movePiece = tower2.shift()
            thirdPeg.unshift(movePiece)
        }
        if (largestPiece.tower = 3) {
            movePiece = tower3.shift()
            thirdPeg.unshift(movePiece)
        }


        //move the largest moveable piece onto the place it can move to

        return [tower1, tower2, tower3] + restacking(tower1, tower2, tower3)

    }
    const leftTower = tower
    const middleTower = []
    const rightTower = []
    return restacking(leftTower, middleTower, rightTower, null)
}

const oneDisk = [
    "-"
]

const twoDisks = [
    "-",
    "--"
]

const threeDisks = [
    "-",
    "--",
    "---"
]

const fourDisks = [
    "-",
    "--",
    "---",
    "----"
]

const fiveDisks = [
    "-",
    "--",
    "---",
    "----",
    "-----"
]

console.log(towerOfHanoi(twoDisks))