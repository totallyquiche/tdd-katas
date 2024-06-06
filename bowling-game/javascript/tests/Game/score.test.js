describe("Game.score should", () => {
  const Game = require("../../Game");
  let game;

  beforeEach(() => (game = new Game()));

  test("be a function", () => {
    expect(game.score).toBeInstanceOf(Function);
  });

  test("should not take any arguments", () => {
    const expectedError = new Error(
      "expected no arguments but got at least one"
    );

    expect(() => game.score(0)).toThrow(expectedError);
  });

  test("should return an integer", () => {
    expect(Number.isInteger(game.score())).toBe(true);
  });

  test("should return the current score", () => {
    game.roll(5);

    expect(game.score()).toBe(5);
  });
});
