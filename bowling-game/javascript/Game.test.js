const Game = require("./Game");

describe("Game should", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test("calculate correct score for all gutter balls", () => {
    const maxRolls = 20;

    for (let i = 0; i < maxRolls; i++) {
      game.roll(0);
    }

    expect(game.score()).toBe(0);
  });

  test("calculate correct score for all single-pin-rolls", () => {
    const maxRolls = 20;

    for (let i = 0; i < maxRolls; i++) {
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

  test("calculate correct score for all spares", () => {
    const maxRolls = 21;

    for (let i = 0; i < maxRolls; i++) {
      const pins = i % 2 ? 1 : 9;

      game.roll(pins);
    }

    expect(game.score()).toBe(190);
  });

  test("calculate correct score for all strikes", () => {
    const maxRolls = 12;

    for (let i = 0; i < maxRolls; i++) {
      game.roll(10);
    }

    expect(game.score()).toBe(300);
  });
});
