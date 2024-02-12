// module.exports = { Ship, Gameboard }; 

function coordMatches(coord1, coord2) {
    const xAvail = coord1[0] === coord2[0];
    const yAvail = coord1[1] === coord2[1];
    return xAvail && yAvail
}

function Ship(length) {
    
    let hits = 0;
    function hit() { return hits++ };
    function isSunk() { return hits >= length };
    let slot = [];
    
    return { 
        length,
        hit, 
        isSunk, 
         get slot() { return slot },
         set slot(location) { slot = location } }
}

function Gameboard() {
    const DIM = 10;
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

    function findSlot(ship, shipObjects) {

        function locationAvail(coord, shipObjects) {
            if (shipObjects.length === 0) return true;

            const slots = [...shipObjects.map(ship => {return ship.slot})]
            if (slots.length === 0) return true;

            const isSlotClear = slots
                .every((space) => { 
                    if (!space) return true;
                    else {return !coordMatches(coord,space) }
                });

            return isSlotClear;
        }

        const layoutDirections = [[0,1],[0,-1],[-1,0],[1,0]]
        let slot;
        let isBadSlot = true;
        
        do {
            slot = [];
            const rand = Math.round(Math.random() * 3);
            const [xDir, yDir] = layoutDirections[rand];

            let [xStart, yStart] = Array
                .from({length: 2}, () => Math.round(Math.random() * 9));

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

    function createShips() {
        
        const shipObjects = [];
        shipLengths.map((length) => {
            const ship = Ship(length);
            ship.slot = findSlot(ship, shipObjects);
            shipObjects.push(ship)
        })
        return shipObjects;
    }

    function receiveAttack(coord) {
        if (!isOnBoard(coord)) return false;
        
        const allHits = [...hitSpaces.openSpaces, ...hitSpaces.shipSpaces];
        const alreadyHit = allHits.some((hit) => coordMatches(hit, coord));
        if (alreadyHit) return false;

        
        let foundShip = false;
        for (let ship of shipObjects) {
            const hitSpace = ship.slot
                .find((space) => coordMatches(coord, space));
            if (hitSpace) {
                foundShip = true;
                ship.hit();
                hitSpaces.shipSpaces.push(hitSpace);
                break;
            }
        }

        if(!foundShip) hitSpaces.openSpaces.push(coord);
    
        updatePrivateBoard(privateBoard);
        updatePublicBoard(publicBoard);
        return true;
    }

    function allShipsSunk() {
        return shipObjects.some((ship) => { ship.isSunk() })
    }

    function updatePrivateBoard(privateBoard) {
        shipObjects.
            forEach((ship) => {
                ship.slot.forEach(([x,y]) => privateBoard[x][y] = 'T');
            });
        hitSpaces.shipSpaces.forEach(([x,y]) => privateBoard[x][y] = 'X');
        hitSpaces.openSpaces.forEach(([x,y]) => privateBoard[x][y] = 'O');

        return privateBoard;
    }
    
    function updatePublicBoard(publicBoard) {
        hitSpaces.shipSpaces.forEach(([x,y]) => publicBoard[x][y] = 'X');
        hitSpaces.openSpaces.forEach(([x,y]) => publicBoard[x][y] = 'O');

        return publicBoard;
    }

    function printPrivateBoard() { console.table(privateBoard) };
    function printPublicBoard() { console.table(publicBoard) };


    const shipObjects = createShips();
    const hitSpaces =  { openSpaces: [], shipSpaces: []};

    const publicBoard = updatePublicBoard(createBoard());
    const privateBoard = updatePrivateBoard(createBoard());
     
    return { receiveAttack, printPrivateBoard, printPublicBoard, allShipsSunk }
}

function Player(computerPlayer) {
    function generateHit() {
        if (!computerPlayer) return;

        const attemptedHits = [];
        let hit = Array
            .from({length: 2}, () => Math.round(Math.random() * 9));

        let isHitGood = false;

        do {
            let alreadyTried = attemptedHits.some((prevHit) => { 
                return coordMatches(prevHit, hit) 
            });

            if (alreadyTried) {
                hit = Array
                    .from({length: 2}, () => Math.round(Math.random() * 9));
            }
            else {
                attemptedHits.push(hit)
                isHitGood = true;
            }
        }
        while(!isHitGood)
        
        return hit        
    }

    
    const board = Gameboard();

    return { board, generateHit }
}

a = Player('a');
console.log(a.generateHit());