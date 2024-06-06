module.exports = class Game {
  #score = [];
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

    if (number > 10) {
      throw new RangeError("expected a number no larger than 10 but got one");
    }

    if (arguments.length > 1) {
      throw new Error("expected only one argument");
    }

    if (this.#score.length < this.currentFrame + 1) {
      this.#score.push([]);
    }

    this.#score[this.currentFrame].push(number);

    this.#currentRoll++;

    if (this.#currentRoll === 2) {
      this.currentFrame++;
    }
  }

  score() {
    if (arguments.length > 0) {
      throw new Error("expected no arguments but got at least one");
    }

    return this.#score.flat().reduce((a, b) => a + b, 0);
  }
};
