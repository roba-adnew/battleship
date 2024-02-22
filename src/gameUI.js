import { Player, Gameboard } from "./gameObjects"; 

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
    renderGameBoard(player, comp);
    renderGameBoard(comp, player); 
}

export function buildNewGameButton() {
    const button = createElement(
        'button', 'starter', 'Start a new game');
    button.addEventListener('click', startNewGame, { once : true});
    return button;
}

export function renderGameBoard(player, opponent) {
    const playerName = player.attemptHit.name.slice(0,-3)
;    const isComputer = player.attemptHit.name === 'computerHit';
    let board = player.board.updatePublicBoard();
    const boardUI = createElement('table', playerName);

    for (let i = 0; i < board.length; i++) {
        const boardRow = createElement('tr', `${playerName}[${i}]`);
        boardUI.append(boardRow);
        
        for (let j = 0; j < board[i].length; j++) {
            const cellID = `${playerName}[${i},${j}]`;
            const boardCell = createElement('td', cellID, board[i][j]);

            if (isComputer) {
                boardCell.innerHTML = '';
                const cellButton = createElement('button', cellID, board[i][j]);
                cellButton.addEventListener('click', () => {
                
                    let winner;
                    const attackDetails = player.board.receiveAttack([i,j]);
                    player.board.printPrivateBoard();
                    board = player.board.updatePublicBoard();
                    cellButton.innerHTML = board[i][j];
                
                    let spaceType = Object.keys(attackDetails)[0]; 
                    if (spaceType === 'ship') {
                        winner = player.board.allShipsSunk() 
                            ? opponent : undefined;
                    }
                    if (winner) {
                        alert('You won!'); 
                        document.body.replaceChildren();
                        document.body.append(buildNewGameButton());
                        return;
                    }
                
                    const react = player.attemptHit();
                    const reactDetails = opponent.board.receiveAttack(react);
                    const [x, y] = Object.values(reactDetails)[0];
                    spaceType = Object.keys(reactDetails)[0]; 
                    
                    const cellHtmlId = `user[${x},${y}]`;
                    const attackedCell = document.getElementById(cellHtmlId);
                    const attackRender = spaceType === 'ship' ? 'X' : '_';
                    attackedCell.innerHTML = attackRender;

                    opponent.board.printPrivateBoard();
                    const playerBoard = opponent.board.updatePublicBoard();
                    
                    if (spaceType === 'ship') {
                        winner = opponent.board.allShipsSunk() 
                            ? player : undefined;
                    }
                    if (winner) {
                        alert('You lost!'); 
                        document.body.replaceChildren();
                        document.body.append(buildNewGameButton());
                        return;
                    }
                
                }, { once : true});
                boardCell.append(cellButton);
            }
        
            boardRow.append(boardCell);
        }
    }

    document.body.append(boardUI);
}