describe("Game.roll should", () => {
  const Game = require("../../Game");
  let game;

  beforeEach(() => (game = new Game()));

  test("be a function", () => {
    expect(game.roll).toBeInstanceOf(Function);
  });

  test("not return anything", () => {
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

  test("not accept negative numbers", () => {
    const expectedError = new RangeError(
      "expected a non-negative number but got a negative number"
    );

    expect(() => game.roll(-1)).toThrow(expectedError);
  });

  test("not accept numbers larger than current pins", () => {
    const expectedError = new RangeError(
      "expected a number no larger than the number of current pins but got one"
    );

    expect(() => game.roll(11)).toThrow(expectedError);

    game.roll(5);

    expect(() => game.roll(6)).toThrow(expectedError);
  });

  test("advance the frame after being called twice", () => {
    expect(game.currentFrame).toBe(1);

    game.roll(0);

    expect(game.currentFrame).toBe(1);

    game.roll(0);

    expect(game.currentFrame).toBe(2);
  });

  test("increase score by argument value", () => {
    game.roll(0);
    game.roll(5);

    expect(game.getScore()).toBe(5);
  });

  test("decrease number of pins by argument value", () => {
    const originalCurrentPins = game.currentPins;

    game.roll(5);

    expect(game.currentPins).toBe(originalCurrentPins - 5);
  });

  test("add a bonus for a spare", () => {
    game.roll(5);
    game.roll(5);
    game.roll(5);

    const previousFrameScore = game.score[game.currentFrame - 1].reduce(
      (a, b) => a + b
    );

    expect(previousFrameScore).toBe(15);
  });

  test("end the current frame with a strike", () => {
    const originalFrame = game.currentFrame;

    game.roll(10);

    expect(game.currentFrame).toBe(originalFrame + 1);
  });

  test("add a bonus for a strike", () => {
    game.roll(10);
    game.roll(1);
    game.roll(2);

    expect(game.getScore()).toBe(16);
  });
});
