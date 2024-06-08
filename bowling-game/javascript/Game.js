module.exports = class Game {
  #maxFrames = 10;
  #rolls = [];

  roll(pins) {
    this.#rolls.push(pins);
  }

  score() {
    let score = 0;
    let rollsIndex = 0;
    let frameScore = 0;

    for (let frameIndex = 0; frameIndex < this.#maxFrames; frameIndex++) {
      const firstRoll = this.#rolls[rollsIndex] || 0;
      const secondRoll = this.#rolls[rollsIndex + 1] || 0;
      const thirdRoll = this.#rolls[rollsIndex + 2] || 0;
      const strike = firstRoll === 10;
      const spare = !strike && firstRoll + secondRoll === 10;

      if (strike) {
        frameScore = firstRoll + secondRoll + thirdRoll;
      }

      if (spare) {
        frameScore = firstRoll + secondRoll + thirdRoll;
      }

      if (!strike && !spare) {
        frameScore = firstRoll + secondRoll;
      }

      score += frameScore;

      rollsIndex += strike ? 1 : 2;
    }

    return score;
  }
};
