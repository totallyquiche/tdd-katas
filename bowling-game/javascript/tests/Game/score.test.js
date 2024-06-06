describe("Game.score should", () => {
  const Game = require("../../Game");
  const game = new Game();

  test("be a function", () => {
    expect(game.score).toBeInstanceOf(Function);
  });

  test("should not take any arguments", () => {
    const expectedError = new Error(
      "expected no arguments but got at least one"
    );

    expect(() => game.score(0)).toThrow(expectedError);
  });
});
