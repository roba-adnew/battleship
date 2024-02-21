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
    renderGameBoard(player);
    renderGameBoard(comp); 
}

export function buildNewGameButton() {
    const button = createElement(
        'button', 'starter', 'Start a new game');
    button.addEventListener('click', startNewGame, { once : true});
    return button;
}

export function renderGameBoard(player) {
    let board = player.board.updatePublicBoard();
    const boardUI = createElement('table','player');

    for (let i = 0; i < board.length; i++) {
        const boardRow = createElement('tr', `row[${i}]`);
        boardUI.append(boardRow);
        
        for (let j = 0; j < board[i].length; j++) {
            const cellID = `[${i},${j}]`;
            const boardCell = createElement('td', cellID, board[i][j]);

            if (player.attemptHit.name === 'computerHit') {
                boardCell.innerHTML = '';
                const cellButton = createElement(
                    'button', cellID, board[i][j]);

                cellButton.addEventListener('click', () => {
                    player.board.receiveAttack([i,j]);
                    player.board.printPrivateBoard();
                    board = player.board.updatePublicBoard();
                    cellButton.innerHTML = board[i][j];
                }, 
                { once : true});

                boardCell.append(cellButton);
            }
        
            boardRow.append(boardCell);
        }
    }

    document.body.append(boardUI);
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