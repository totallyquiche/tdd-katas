module.exports = class {
  #maxSize;
  #elements = [];

  constructor(maxSize) {
    this.#maxSize = maxSize;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.#elements.length;
  }

  push(element) {
    if (this.size() === this.#maxSize) {
      throw new Error("overflow error");
    }

    this.#elements.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("underflow error");
    }

    this.#elements.pop();
  }
};
