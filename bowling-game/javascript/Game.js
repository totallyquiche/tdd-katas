module.exports = class Game {
  #score = [[0, 0]];
  #currentRoll = 0;
  currentFrame = 0;

  roll(number) {
    if (!Number.isInteger(number)) {
      throw new TypeError("expected an integer but didn't get one");
    }

    if (number < 0) {
      throw new RangeError(
        "expected a non-negative number but got a negative number"
      );
    }

    if (arguments.length > 1) {
      throw new Error("expected only one argument");
    }

    this.#currentRoll++;

    if (this.#currentRoll === 2) {
      this.currentFrame++;
    }
  }

  score() {
    if (arguments.length > 0) {
      throw new Error("expected no arguments but got at least one");
    }

    return this.#score[0][0];
  }
};
