function buildElement(tag, id = '', innerHTML = '') {
    const element = document.createElement(tag);
    element.id = id;
    element.innerHTML = innerHTML;
    return element
}

export function buildNewGameButton() {
    const button = buildElement(
        'button', 'starter', 'Start a new game');
    button.addEventListener('click', renderGameBoards());
    document.body.append(button)
    return;

}

function renderGameBoards() {
    return;
}