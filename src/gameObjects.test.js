const Ship = require('./gameObjects').Ship;
const Gameboard = require('./gameObjects').Gameboard;

test('Ship can get hit', () => {
    const testShip = Ship(5);
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(false);
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(false);
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
});

test('Gameboard creates ships', () => {
    const testBoard = Gameboard();
    const ship = testBoard.createShips()[0];
    expect(ship.isSunk()).toBe(Ship(1).isSunk());
})

// test('Gameboard can receive an attacks', () => {
//     const testBoard = Gameboard();
//     expect(testBoard.receiveAttack([0,0])).toBe(false);
//     expect(testBoard.receiveAttack([0,1])).toBe(true);
//     expect(testBoard.allSunk()).toBe(true);
// });