import { Player, coordMatches } from "./gameObjects"; 

let player, comp;

export function createElement(tag, id = '', innerHTML = '') {
    const element = document.createElement(tag);
    element.id = id;
    element.innerHTML = innerHTML;
    return element
}

function startNewGame () {
    player = Player(true);
    comp = Player();
    document.body.replaceChildren();
    const gameBoard = createElement('div','parent');
    const playerBoard = renderGameBoard(player, comp);
    const compBoard = renderGameBoard(comp, player); 
    gameBoard.append(playerBoard);
    gameBoard.append(compBoard);
    document.body.append(gameBoard);
}

function buildNewGameButton(divId = 'starterDiv', buttonText = 'LETS GO TO WAR!') {
    const buttonDiv = createElement('div', divId);
    const button = createElement('button', 'starter', buttonText);
    button.addEventListener('click', startNewGame, { once : true});
    buttonDiv.append(button)
    return buttonDiv;
}

function renderGameBoard(player, opponent) {
    const playerName = player.attemptHit.name.slice(0,-3);
    const isComputer = player.attemptHit.name === 'computerHit';
    let board = player.board.updatePublicBoard();
    const boardDiv = createElement('div', `${playerName}Div`);
    const boardUI = createElement('table', `${playerName}Table`);
    boardDiv.append(boardUI);

    const shipSpaces = [];
    player.board.shipObjects.map(
        (ship) => {ship.slot.map((space) => shipSpaces.push(space))}
    );

    for (let i = 0; i < board.length; i++) {
        const boardRow = createElement('tr', `${playerName}[${i}]`);
        boardUI.append(boardRow);
        
        for (let j = 0; j < board[i].length; j++) {
            const cellID = `${playerName}[${i},${j}]`;
            const boardCell = createElement('td', cellID, board[i][j]);

            if (isComputer) {
                boardCell.innerHTML = '';
                const cellButton = createElement('button', cellID, board[i][j]);
                cellButton.classList.add(`${playerName}Cell`)
                cellButton.addEventListener('click', () => {         
                    let winner;
                    const attackDetails = player.board.receiveAttack([i,j]);
                    player.board.updatePublicBoard();
                    player.board.updatePrivateBoard();
                
                    let spaceType = Object.keys(attackDetails)[0]; 
                    if (spaceType === 'ship') {
                        boardCell.classList.add('goodHit');
                        cellButton.classList.add('goodHit');
                        winner = player.board.allShipsSunk() 
                            ? opponent : undefined;
                    }
                    else {
                        boardCell.classList.add('badHit');
                        cellButton.classList.add('badHit');
                    }
                    if (winner) {
                        const winnerMessage = 'YOU ARE MAGNIFICENT, YOU WON!';
                        const winnerBanner = createElement('div','won',winnerMessage);
                        document.body.prepend(winnerBanner);

                        const newButton = buildNewGameButton('newStarterDiv', 'MORE WAR!');
                        const parent = document.getElementById('parent');
                        const compDiv = document.getElementById('computerDiv');
                        parent.insertBefore(newButton, compDiv);
                        return;
                    }
                
                    const react = player.attemptHit();
                    const reactDetails = opponent.board.receiveAttack(react);
                    const [x, y] = Object.values(reactDetails)[0];
                    spaceType = Object.keys(reactDetails)[0]; 
                    
                    const cellHtmlId = `user[${x},${y}]`;
                    const attackedCell = document.getElementById(cellHtmlId);

                    opponent.board.updatePublicBoard();
                    opponent.board.updatePublicBoard();
                    
                    if (spaceType === 'ship') {
                        attackedCell.classList.replace('ship', 'goodHit');
                        winner = opponent.board.allShipsSunk() 
                            ? player : undefined;
                    }
                    else {
                        attackedCell.classList.add('badHit');
                    }
                    if (winner) {
                        const loserMessage = 'YOU LOST?!...you lost';
                        const loserBanner = createElement('div','lost',loserMessage);
                        document.body.prepend(loserBanner);

                        const newButton = buildNewGameButton('newStarterDiv', 'REVENGE');
                        const parent = document.getElementById('parent');
                        const compDiv = document.getElementById('computerDiv');
                        parent.insertBefore(newButton, compDiv);
                        return;
                    }
                
                }, { once : true});
                boardCell.append(cellButton);
            }
            else if (!isComputer) {
                const isShipSpace = shipSpaces.some(
                    (space) => {return coordMatches(space,[i,j])})
                if (isShipSpace) {
                    boardCell.classList.add('ship')
                }
                else {
                    boardCell.classList.add('open')
                }
            }
        
            boardRow.append(boardCell);
        }
    }

    const displayName = playerName === 'user' ? 'our ships' : 'ENEMY SHIPS!';
    const tableTitle = createElement('div',`${playerName}Display`, displayName);
    boardDiv.append(tableTitle);

    return boardDiv;
}