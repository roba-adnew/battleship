/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameObjects.js":
/*!****************************!*\
  !*** ./src/gameObjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   gameplay: () => (/* binding */ gameplay)
/* harmony export */ });
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
            const ship = Ship(length);
            ship.slot = findSlot(ship, shipObjects);
            shipObjects.push(ship)
        })
        return shipObjects;
    }

    function findSlot(ship, shipObjects) {

        function locationAvail(coord, shipObjects) {
            if (shipObjects.length === 0) return true;

            const slots = [...shipObjects.map(ship => {return ship.slot})]
            if (slots.length === 0) return true;

            const isSlotClear = slots
                .every((space) => { 
                    if (!space) return true;
                    else {!coordMatches(coord,space) }
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
        hitSpaces.openSpaces.forEach(([x,y]) => publicBoard[x][y] = 'O');

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
        get DIM() { return DIM} , 
        hitSpaces, 
        shipObjects, 
        allShipsSunk }
}

function Player(isUser) {
    function computerHit() {
        const attemptedHits = [];
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
        
        return hit  
        }

    function userHit() {
        const stringCoord = prompt("Where do you want to attack?: ");
        const xPos = parseInt(stringCoord.charAt(0));
        const yPos = parseInt(stringCoord.charAt(1));
        return [xPos, yPos]
    }
    
    const attemptHit = isUser ? userHit : computerHit;
    const board = Gameboard();

    return { board, attemptHit }
}


function gameplay(player1, player2) {
    let winner;
    let attackingPlayer = player1;
    let receivingPlayer = player2;
    do {
        let hit = attackingPlayer.attemptHit();
        let attackLanded = receivingPlayer.board.receiveAttack(hit)
        if (!attackLanded) { continue }
        
        receivingPlayer.board.printPrivateBoard();
        attackingPlayer.board.printPrivateBoard();
        let spaceType = Object.keys(attackLanded)[0]; 
        if (spaceType === 'ship') {
            winner = receivingPlayer.board.allShipsSunk() 
                ? attackingPlayer : undefined;
            continue;
        }
        attackingPlayer = attackingPlayer === player1 ? player2 : player1;
        receivingPlayer = receivingPlayer === player1 ? player2 : player1; 
    }
    while (!winner)
    return winner;
}

/***/ }),

/***/ "./src/gameUI.js":
/*!***********************!*\
  !*** ./src/gameUI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildNewGameButton: () => (/* binding */ buildNewGameButton)
/* harmony export */ });
/* harmony import */ var _gameObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObjects */ "./src/gameObjects.js");
 

function buildElement(tag, id = '', innerHTML = '') {
    const element = document.createElement(tag);
    element.id = id;
    element.innerHTML = innerHTML;
    return element
}

function buildNewGameButton() {
    const button = buildElement(
        'button', 'starter', 'Start a new game');
    button.addEventListener('click', renderGameBoards());
    document.body.append(button)
    return;

}

function renderGameBoards() {
    const player = (0,_gameObjects__WEBPACK_IMPORTED_MODULE_0__.Player)(true);
    const comp = (0,_gameObjects__WEBPACK_IMPORTED_MODULE_0__.Player)(false);

    const playerBoard = player.updatePublicBoard();
    const playerTable = buildElement('table','player');
    const compBoard = comp.updatePublicBoard();
    const compTable = buildElement('table','comp');

    for (let i = 0; i < playerBoard.length; i++) {
        const playerRow = buildElement('tr', `row(${i})`);
        const compRow = buildElement('tr', `row(${i})`);
        playerTable.append(playerRow);
        compTable.append(compRow);
        
        for (let j = 0; j < playerBoard[i].length; j++) {
            const cellID = `cell(${i},${j})`;
            const playerCell = buildElement('td', cellID, playerBoard[i][j]);
            const compCell = buildElement('td', cellID, compBoard[i][j]);
            playerRow.append(playerCell);
            compBoard.append(compCell);
        }
    }

    document.body.append(playerBoard);
    document.body.append(compBoard);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameUI */ "./src/gameUI.js");


(0,_gameUI__WEBPACK_IMPORTED_MODULE_0__.buildNewGameButton)();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map