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

export function renderGameBoards() {
    const player = Player('anything');
    const comp = Player(false);

    const playerBoard = player.board.updatePublicBoard();
    const playerTable = createElement('table','player');
    const compBoard = comp.board.updatePublicBoard();
    const compTable = createElement('table','comp');

    for (let i = 0; i < playerBoard.length; i++) {
        const playerRow = createElement('tr', `row(${i})`);
        const compRow = createElement('tr', `row(${i})`);
        playerTable.append(playerRow);
        compTable.append(compRow);
        
        for (let j = 0; j < playerBoard[i].length; j++) {
            const cellID = `cell(${i},${j})`;
            const playerCell = createElement('td', cellID, playerBoard[i][j]);
            const compCell = createElement('td', cellID, compBoard[i][j]);
            playerRow.append(playerCell);
            compRow.append(compCell);
        }
    }

    document.body.append(playerTable);
    document.body.append(compTable);
}