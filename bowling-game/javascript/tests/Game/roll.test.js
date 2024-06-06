describe("Game should", () => {
  const Game = require("../../Game");

  test('have a method named "roll"', () => {
    const game = new Game();

    expect(game.roll).toBeInstanceOf(Function);
  });
});
