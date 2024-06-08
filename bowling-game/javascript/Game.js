module.exports = class Game {
  #maxFrames = 10;
  maxPins = 10;
  maxRolls = 20;
  maxStrikeRolls = 12;
  #rolls = [];

  roll(pins) {
    this.#rolls.push(pins);
  }

  score() {
    let score = 0;
    let rollsIndex = 0;

    for (let frameIndex = 0; frameIndex < this.#maxFrames; frameIndex++) {
      const nextRoll = this.#rolls[rollsIndex + 2] || 0;
      const [firstRoll, secondRoll] = [
        this.#rolls[rollsIndex] || 0,
        this.#rolls[rollsIndex + 1] || 0,
      ];

      if (firstRoll + secondRoll === 10) {
        score += firstRoll + secondRoll + nextRoll;
      } else {
        score += firstRoll + secondRoll;
      }

      rollsIndex += 2;
    }

    return score;
  }
};
