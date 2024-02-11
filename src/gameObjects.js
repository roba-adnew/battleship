// module.exports = { Ship, Gameboard }; 

function Ship(length) {
    
    let hits = 0;
    function hit() { return hits++ };
    function isSunk() { return hits >= length };
    
    return { length, hit, isSunk, set location(loc) { return loc } }
}


    const DIM = 10;
    const shipLengths = [4,3,3,2,2,2,1,1,1,1];

    function createBoard() {
        let board = [];

        for (let i = 0; i < DIM; i++) {
            const row = [];
            board.push(row);
            for (let j = 0; j < DIM; j++) {
                board[i][j] = ' '
            }
        }
        return board;
    }

    function printBoard() { console.table(privateBoard) };

    function isOnBoard(coord) {
        const validX = coord[0] >= 0 && coord[0] < DIM; 
        const validY = coord[1] >= 0 && coord[1] < DIM;
        return validX && validY;
    }

    function coordMatches(coord1, coord2) {
        const xAvail = coord1[0] === coord2[0];
        const yAvail = coord1[1] === coord2[1];
        return xAvail && yAvail
    }

    function findSlot(ship, shipLocations) {
        function locationAvail(coord, shipLocations) {
            for (let ship in shipLocations) {
                for (let space of shipLocations[ship]) {
                    if (coordMatches(coord, space)) {
                        return false;
                    }
                }
            }
            return true;
        }

        const layoutDirections = [[0,1],[0,-1],[-1,0],[1,0]]
        let slot;
        let slotNotOnBoard = true;
        
        do {
            slot = [];
            const rand = Math.round(Math.random() * 3);
            const [xDir, yDir] = layoutDirections[rand];

            let xStart = Math.round(Math.random() * 9) % 9;
            let yStart = Math.round(Math.random() * 9) % 9;

            
            for (let i = 0; i < ship.length; i++) {
                const xPos = xStart + (i * xDir);
                const yPos = yStart + (i * yDir);
                const pos = [xPos, yPos];

                if (!isOnBoard(pos))  break 
                if (!locationAvail(pos, shipLocations)) break 

                slot.push(pos);
            }

            slotNotOnBoard = slot.length !== ship.length;
        }
        while (slotNotOnBoard)

        return slot;
    }

    function createShips() {
        const shipObjects = [];
        shipLengths.map((length) => {shipObjects.push(Ship(length))})
        const ships = new Map()
        for (let ship of shipObjects) {
            ships.set(ship,findSlot(ship, ships));
        }
        return ships;
    }

    const shipInstances = createShips();
    const hitSpaces =  {
        openSpaces: [],
        shipSpaces: []
    };

    function receiveAttack(coord) {
        if (!isOnBoard(coord)) return false;
        
        const allHits = [...hitSpaces.openSpaces, ...hitSpaces.shipSpaces];
        const alreadyHit = allHits.some((hit) => coordMatches(hit, coord));
        if (alreadyHit) return false;

        let foundShip = false;
        for (const [ship, location] of shipInstances) {
            const hitSpace = location
                .find((space) => coordMatches(coord, space));
            if (hitSpace) {
                foundShip = true;
                ship.hit();
                hitSpaces.shipSpaces.push(hitSpace);
                break;
            }
        }

        if(!foundShip) hitSpaces.openSpaces.push(coord);
    
        updatePrivateBoard(privateBoard)
        return true;
    }

    const privateBoard = createBoard();
    function updatePrivateBoard(privateBoard) {
        for (const [ship,location] of shipInstances) {
            location.forEach(([x,y]) => privateBoard[x][y] = 'T');
        }
        hitSpaces.shipSpaces.forEach(([x,y]) => privateBoard[x][y] = 'X');
        hitSpaces.openSpaces.forEach(([x,y]) => privateBoard[x][y] = 'O');

        return privateBoard;
    }



printBoard();
receiveAttack([1,2]);
receiveAttack([4,5]);
receiveAttack([6,7]);
receiveAttack([0,9]);
receiveAttack([2,4]);
receiveAttack([3,4]);
receiveAttack([3,5]);
printBoard();
