module.exports = class {
  #empty = true;

  isEmpty() {
    return this.#empty;
  }

  push(element) {
    this.#empty = false;
  }

  pop() {
    this.#empty = true;
  }
};
