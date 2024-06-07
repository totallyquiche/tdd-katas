module.exports = class Game {
  maxRolls = 20;
  #score = 0;

  roll(pins) {
    this.#score += pins;
  }

  score() {
    return this.#score;
  }
};
