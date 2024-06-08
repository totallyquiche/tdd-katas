module.exports = class Game {
  #maxPins = 10;
  #rolls = [];

  roll(pins) {
    if (pins > this.#maxPins) {
      throw new RangeError("cannot roll more than the max number of pins");
    }

    this.#rolls.push(pins);
  }

  score() {
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

      if (didRollStrike) {
        score += firstRoll + secondRoll + thirdRoll;
      }

      if (didRollSpare) {
        score += firstRoll + secondRoll + thirdRoll;
      }

      if (!didRollStrike && !didRollSpare) {
        score += firstRoll + secondRoll;
      }

      rollsIndex += didRollStrike ? 1 : 2;
    }

    return score;
  }
};
