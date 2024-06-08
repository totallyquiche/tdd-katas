const Game = require("./Game");

describe("Game should", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

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

  test("calculate correct score for a spare", () => {
    game.roll(1);
    game.roll(9);
    game.roll(5);

    expect(game.score()).toBe(20);
  });

  test("calculate correct score for a strike", () => {
    game.roll(10);
    game.roll(1);
    game.roll(2);

    expect(game.score()).toBe(16);
  });
});
