module.exports = { Ship, Gameboard }; 

function Ship(length) {
    
    let hits = 0;
    function hit() { return hits++ };
    function isSunk() { return hits >= length };
    
    return { length, hit, isSunk, set location(loc) { return loc } }
}

function Gameboard() {
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

    function coordAvailable(coord, space) {
        const xAvail = coord[0] !== space[0];
        const yAvail = coord[1] !== space[1];
        return xAvail && yAvail
    }

    function locationAvail(coord, shipLocations) {
        for (let ship in shipLocations) {
            for (let space of shipLocations[ship]) {
                if (!coordAvailable(coord, space)) {
                    return false;
                }
            }
        }
        return true;
    }

    function findSlot(ship, shipLocations) {
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

                if (!isOnBoard(pos)) { break }
                if (!locationAvail(pos, shipLocations)) { break }

                slot.push(pos);
            }

            slotNotOnBoard = slot.length !== ship.length;
        }
        while (slotNotOnBoard)

        return slot;
    }

    function createShips() {
        const ships = [];
        shipLengths.map((length) => {ships.push(Ship(length))})
        return ships;
    }

    function addShipsToBoard() {
        const ships = createShips();
        const shipLocations = new Map()
        for (let ship of ships) {
            shipLocations.set(ship,findSlot(ship, shipLocations));
        }
        return shipLocations;
    }

    function updatePrivateBoard() {
        const shipLocations = addShipsToBoard();
        const privateBoard = createBoard();
        for (const [ship,location] of shipLocations) {
            location.forEach(([x,y]) => privateBoard[x][y] = 'T');
        }
        return privateBoard;
    }

    const privateBoard = updatePrivateBoard();
    return { printBoard, createShips }
}

a = Gameboard();
a.printBoard()