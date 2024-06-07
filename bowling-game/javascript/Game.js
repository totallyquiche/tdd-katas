module.exports = class Game {
  #score = 0;

  roll(pins) {
    this.#score += pins;
  }

  score() {
    return this.#score;
  }
};
