import { Player, Gameboard, gameplay } from "./gameObjects"; 

export function createElement(tag, id = '', innerHTML = '') {
    const element = document.createElement(tag);
    element.id = id;
    element.innerHTML = innerHTML;
    return element
}

export function buildNewGameButton() {
    const button = createElement(
        'button', 'starter', 'Start a new game');
    button.addEventListener('click', renderGameBoards);
    return button;
}

const player = Player();
const comp = Player();

export function renderGameBoards() {
    document.body.replaceChildren()

    let playerBoard = player.board.updatePublicBoard();
    const playerTable = createElement('table','player');
    let compBoard = comp.board.updatePublicBoard();
    const compTable = createElement('table','comp');

    for (let i = 0; i < playerBoard.length; i++) {
        const playerRow = createElement('tr', `row[${i}]`);
        const compRow = createElement('tr', `row[${i}]`);
        playerTable.append(playerRow);
        compTable.append(compRow);
        
        for (let j = 0; j < playerBoard[i].length; j++) {
            const cellID = `[${i},${j}]`;
            const playerCell = createElement('td', cellID, playerBoard[i][j]);

            const compCell = createElement('td', cellID);
            const gameButton = createElement('button', cellID, compBoard[i][j]);
            gameButton.addEventListener('click', () => {
                comp.board.receiveAttack([i,j]);
                comp.board.printPrivateBoard();
                compBoard = comp.board.updatePublicBoard();
                gameButton.innerHTML = compBoard[i][j];
            });
            compCell.append(gameButton);

            playerRow.append(playerCell);
            compRow.append(compCell);
        }
    }

    document.body.append(playerTable);
    document.body.append(compTable);
}