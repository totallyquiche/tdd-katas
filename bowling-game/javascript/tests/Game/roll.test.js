describe("Game.roll should", () => {
  const Game = require("../../Game");
  const game = new Game();

  test("be a function", () => {
    expect(game.roll).toBeInstanceOf(Function);
  });

  test("should not return anything", () => {
    expect(game.roll(0)).not.toBeDefined();
  });

  test("only accept an integer", () => {
    const expectedError = new TypeError(
      "expected an integer but didn't get one"
    );

    const invalidParameters = [null, 0.1, [], {}, ""];

    invalidParameters.forEach((parameter) => {
      expect(() => {
        game.roll(parameter);
      }).toThrow(expectedError);
    });
  });
});
