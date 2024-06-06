describe("Game.roll should", () => {
  const Game = require("../../Game");
  let game;

  beforeEach(() => (game = new Game()));

  test("be a function", () => {
    expect(game.roll).toBeInstanceOf(Function);
  });

  test("should not return anything", () => {
    expect(game.roll(0)).not.toBeDefined();
  });

  test("only accepts one argument", () => {
    const expectedError = new Error("expected only one argument");

    expect(() => game.roll(0, 1)).toThrow(expectedError);
  });

  test("only accept an integer", () => {
    const expectedError = new TypeError(
      "expected an integer but didn't get one"
    );

    const invalidArguments = [null, 0.1, [], {}, ""];

    invalidArguments.forEach((argument) => {
      expect(() => game.roll(argument)).toThrow(expectedError);
    });
  });

  test("should advance the frame after being called twice", () => {
    expect(game.currentFrame).toBe(0);

    game.roll(0);

    expect(game.currentFrame).toBe(0);

    game.roll(0);

    expect(game.currentFrame).toBe(1);
  });
});
