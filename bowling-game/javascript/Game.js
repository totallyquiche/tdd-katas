module.exports = class Game {
  #maxPins = 10;
  #rolls = [];
  #score = 0;

  roll(pins) {
    if (pins > this.#maxPins) {
      throw new RangeError("cannot roll more than the max number of pins");
    }

    this.#rolls.push(pins);

    this.updateScore();
  }

  updateScore() {
    const maxFrames = 10;

    let score = 0;
    let rollsIndex = 0;

    for (let frameIndex = 0; frameIndex < maxFrames; frameIndex++) {
      const firstRoll = this.#rolls[rollsIndex] || 0;
      const secondRoll = this.#rolls[rollsIndex + 1] || 0;
      const thirdRoll = this.#rolls[rollsIndex + 2] || 0;
      const didRollStrike = firstRoll === this.#maxPins;
      const didRollSpare =
        !didRollStrike && firstRoll + secondRoll === this.#maxPins;

      if (didRollStrike || didRollSpare) {
        score += firstRoll + secondRoll + thirdRoll;
      } else if (firstRoll + secondRoll > this.#maxPins) {
        throw new RangeError(
          "cannot roll more than the current number of pins"
        );
      } else {
        score += firstRoll + secondRoll;
      }

      rollsIndex += didRollStrike ? 1 : 2;
    }

    this.#score = score;
  }

  score() {
    return this.#score;
  }
};
