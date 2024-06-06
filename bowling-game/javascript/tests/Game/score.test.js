describe("Game.score should", () => {
  const Game = require("../../Game");
  const game = new Game();

  test("be a function", () => {
    expect(game.score).toBeInstanceOf(Function);
  });
});
