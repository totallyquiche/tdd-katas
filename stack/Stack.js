module.exports = class {
  #maxSize;
  #empty = true;
  #elements = [];

  constructor(maxSize) {
    this.#maxSize = maxSize;
  }

  isEmpty() {
    return this.#empty;
  }

  size() {
    return this.#elements.length;
  }

  push(element) {
    if (this.size() === this.#maxSize) {
      throw new Error("overflow error");
    }

    this.#elements.push(element);

    this.#empty = false;
  }

  pop() {
    if (this.#empty) {
      throw new Error("underflow error");
    }

    this.#empty = true;
  }
};
