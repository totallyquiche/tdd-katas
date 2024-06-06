module.exports = class Game {
  roll(number) {
    console.log(number);
    if (!Number.isInteger(number)) {
      throw new TypeError("expected an integer but didn't get one");
    }
  }
};
