describe("Game.roll should", () => {
  const Game = require("../../Game");

  test("be a function", () => {
    const game = new Game();

    expect(game.roll).toBeInstanceOf(Function);
  });
});
