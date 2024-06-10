module.exports = class {
  #empty = true;

  isEmpty() {
    return this.#empty;
  }

  push(element) {
    this.#empty = false;
  }

  pop() {
    if (this.#empty) {
      throw new Error("underflow error");
    }
    this.#empty = true;
  }
};
