describe("Game.roll should", () => {
  const Game = require("../../Game");
  const game = new Game();

  test("be a function", () => {
    expect(game.roll).toBeInstanceOf(Function);
  });

  test("should not return anything", () => {
    expect(game.roll()).not.toBeDefined();
  });
});
