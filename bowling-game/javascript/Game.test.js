const Game = require("./Game");

describe("Game should", () => {
  const game = new Game();

  test("calculate correct score for all gutter balls", () => {
    for (let i = 0; i < game.maxRolls; i++) {
      game.roll(0);
    }

    expect(game.score()).toBe(0);
  });

  test("calculate correct score for all single-pin-rolls", () => {
    for (let i = 0; i < game.maxRolls; i++) {
      game.roll(1);
    }

    expect(game.score()).toBe(20);
  });
});
