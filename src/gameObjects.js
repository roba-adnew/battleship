export function coordMatches(coord1, coord2) {
    const xAvail = coord1[0] === coord2[0];
    const yAvail = coord1[1] === coord2[1];
    return xAvail && yAvail
}

function Ship(length) {
    
    let hits = 0;
    function hit() { return hits++ };
    function isSunk() { return hits >= length };
    let slot;
    
    return { 
        length,
        hit, 
        isSunk, 
         get slot() { return slot },
         set slot(location) { slot = location } }
}

export function Gameboard() {
    const DIM = 8;
    const shipLengths = [4,3,3,2,2,2,1,1,1,1];

    function createBoard() {
        let board = Array(DIM)
            .fill()
            .map(() => Array(DIM).fill(' '));

        return board;
    }

    function isOnBoard(coord) {
        const validX = coord[0] >= 0 && coord[0] < DIM; 
        const validY = coord[1] >= 0 && coord[1] < DIM;
        return validX && validY;
    }

    function createShips() {
        const shipObjects = [];
        shipLengths.map((length) => {
            let ship = Ship(length);
            ship.slot = findSlot(ship, shipObjects);
            shipObjects.push(ship);
        });
        return shipObjects;
    }

    function findSlot(ship, shipObjects) {

        function locationAvail(coord, shipObjects) {
            if (shipObjects.length === 0) return true;

            let shipSpaces = [...shipObjects.map(ship => {return ship.slot})]
            shipSpaces = shipSpaces.flat();
            
            if (shipSpaces.length === 0) return true;

            const isCoordClear = shipSpaces
                .every((space) => { 
                    if (!space) return true;
                    else { return !coordMatches(coord,space) }
                });

            return isCoordClear;
        }

        const layoutDirections = [[0,1],[0,-1],[-1,0],[1,0]]
        let slot;
        let isBadSlot = true;
        
        do {
            slot = [];
            const rand = Math.round(Math.random() * 3);
            const [xDir, yDir] = layoutDirections[rand];

            let [xStart, yStart] = Array
                .from({length: 2}, () => Math.round(Math.random() * (DIM - 1)));

            for (let i = 0; i < ship.length; i++) {
                const xPos = xStart + (i * xDir);
                const yPos = yStart + (i * yDir);
                const pos = [xPos, yPos];

                if (!isOnBoard(pos))  break 
                if (!locationAvail(pos, shipObjects)) break 

                slot.push(pos);
            }

            isBadSlot = slot.length !== ship.length;
        }
        while (isBadSlot)

        return slot;
    }

    function receiveAttack(coord) {
        if (!isOnBoard(coord)) return false;
        
        const allHits = [...hitSpaces.openSpaces, ...hitSpaces.shipSpaces];
        const alreadyHit = allHits.some((hit) => coordMatches(hit, coord));
        if (alreadyHit) return false;

        for (let ship of shipObjects) {
            const goodHit = ship.slot
                .some((space) => coordMatches(coord, space));
            if (goodHit) {
                ship.hit();
                const hit = { 'ship' : coord };
                updateHitSpaces(hit);
                return hit;
            }
        }

        const hit = { 'open' : coord };
        updateHitSpaces(hit);
        return hit;
    }

    function updateHitSpaces(hit) {
        const spaceType = Object.keys(hit)[0];
        const coord = Object.values(hit)[0];
        if (spaceType === 'ship') {
            hitSpaces.shipSpaces.push(coord);
        }
        else if (spaceType === 'open') {
            hitSpaces.openSpaces.push(coord);
        }
        else {
            throw new Error('Updating hitspaces went wrong');
        }
        updatePrivateBoard();
        updatePublicBoard();
    }

    function allShipsSunk() {
        return shipObjects.every((ship) => { return ship.isSunk() })
    }

    function updatePrivateBoard() {
        const privateBoard = createBoard();
        shipObjects.
            forEach((ship) => {
                ship.slot.forEach(([x,y]) => privateBoard[x][y] = 'T');
            });
        hitSpaces.shipSpaces.forEach(([x,y]) => privateBoard[x][y] = 'X');
        hitSpaces.openSpaces.forEach(([x,y]) => privateBoard[x][y] = 'O');

        return privateBoard;
    }
    
    function updatePublicBoard() {
        const publicBoard = createBoard();
        hitSpaces.shipSpaces.forEach(([x,y]) => publicBoard[x][y] = 'X');
        hitSpaces.openSpaces.forEach(([x,y]) => publicBoard[x][y] = '_');

        return publicBoard;
    }

    function printPrivateBoard() { 
        const privateBoard = updatePrivateBoard(); 
        console.table(privateBoard) 
    };

    function printPublicBoard() { 
        const publicBoard = updatePublicBoard();
        console.table(publicBoard) 
    };

    const shipObjects = createShips();
    const hitSpaces =  { openSpaces: [], shipSpaces: []};
     
    return { 
        receiveAttack, 
        updatePrivateBoard,
        updatePublicBoard,
        printPrivateBoard, 
        printPublicBoard, 
        get DIM() { return DIM}, 
        hitSpaces, 
        shipObjects, 
        allShipsSunk }
}

const attemptedHits = [];
export function Player(isHuman) {
    function computerHit() {
        let hit = Array
            .from({length: 2}, () => Math.round(Math.random() * (board.DIM - 1)));

        let isHitGood = false;

        do {
            let alreadyTried = attemptedHits.some((prevHit) => { 
                return coordMatches(prevHit, hit) 
            });

            if (alreadyTried) {
                hit = Array
                    .from({length: 2}, 
                        () => Math.round(Math.random() * (board.DIM - 1)));
            }
            else {
                attemptedHits.push(hit)
                isHitGood = true;
            }
        }
        while(!isHitGood)
        
        return hit;  
        }

    function userHit(coord) {return coord};
    
    const attemptHit = isHuman ? userHit : computerHit;
    const board = Gameboard();

    return { board, attemptHit }
}