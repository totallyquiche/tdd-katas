describe("Game.roll should", () => {
  const Game = require("../../Game");
  const game = new Game();

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
});
