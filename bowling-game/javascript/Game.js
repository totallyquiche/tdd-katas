module.exports = class Game {
  roll(number) {
    if (!Number.isInteger(number)) {
      throw new TypeError("expected an integer but didn't get one");
    }

    if (arguments.length > 1) {
      throw new Error("expected only one argument");
    }
  }

  score() {
    if (arguments.length > 0) {
      throw new Error("expected no arguments but got at least one");
    }

    return 0;
  }
};
