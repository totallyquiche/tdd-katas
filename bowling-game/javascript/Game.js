module.exports = class Game {
  #currentRoll = 0;
  #maxRolls = 2;
  #maxPins = 10;

  score = [[]];
  currentFrame = 1;
  currentPins = this.#maxPins;

  roll(number) {
    if (!Number.isInteger(number)) {
      throw new TypeError("expected an integer but didn't get one");
    }

    if (number < 0) {
      throw new RangeError(
        "expected a non-negative number but got a negative number"
      );
    }

    if (number > this.currentPins) {
      throw new RangeError(
        "expected a number no larger than the number of current pins but got one"
      );
    }

    if (arguments.length > 1) {
      throw new Error("expected only one argument");
    }

    this.#currentRoll++;

    const onNewFrame = this.#currentRoll === 1;

    if (onNewFrame) {
      this.score.push([]);
    }

    const onFirstFrame = this.currentFrame === 1;
    const previousFrame = this.currentFrame - 1;
    const strikeOnPreviousFrame =
      !onFirstFrame && this.score[previousFrame][0] === this.#maxPins;
    const spareOnPreviousFrame =
      onNewFrame &&
      !onFirstFrame &&
      !strikeOnPreviousFrame &&
      this.score[previousFrame][0] + this.score[previousFrame][1] ===
        this.#maxPins;
    const strikeOnCurrentFrame =
      this.#currentRoll === 1 && number === this.#maxPins;

    if (spareOnPreviousFrame) {
      this.score[previousFrame].push(number);
    }

    if (strikeOnPreviousFrame) {
      this.score[previousFrame].push(number);
    }

    if (
      this.#currentRoll === 1 &&
      strikeOnPreviousFrame &&
      this.currentFrame >= 3 &&
      this.score[previousFrame - 1][0] === this.#maxPins
    ) {
      this.score[previousFrame - 1].push(number);
    }

    this.score[this.currentFrame].push(number);

    this.currentPins -= number;

    if (this.#currentRoll === this.#maxRolls || strikeOnCurrentFrame) {
      this.#currentRoll = 0;
      this.currentFrame++;
      this.currentPins = this.#maxPins;
    }
  }

  getScore() {
    if (arguments.length > 0) {
      throw new Error("expected no arguments but got at least one");
    }

    return this.score.flat().reduce((a, b) => a + b, 0);
  }
};
