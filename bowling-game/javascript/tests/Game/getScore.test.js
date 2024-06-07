describe("Game.getScore should", () => {
  const Game = require("../../Game");
  let game;

  beforeEach(() => (game = new Game()));

  test("be a function", () => {
    expect(game.getScore).toBeInstanceOf(Function);
  });

  test("not take any arguments", () => {
    const expectedError = new Error(
      "expected no arguments but got at least one"
    );

    expect(() => game.getScore(0)).toThrow(expectedError);
  });

  test("return an integer", () => {
    expect(Number.isInteger(game.getScore())).toBe(true);
  });

  test("return the current score", () => {
    game.roll(5);

    expect(game.getScore()).toBe(5);
  });

  test("return the score across multiple frames", () => {
    game.roll(0);
    game.roll(1);
    game.roll(2);

    expect(game.getScore()).toBe(3);
  });

  test("include spare bonuses in return value", () => {
    game.roll(1);
    game.roll(9);
    game.roll(5);

    expect(game.getScore()).toBe(20);
  });
});
