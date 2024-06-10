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

    this.#elements[this.#elements.length] = element;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("underflow error");
    }

    const poppedElement = this.#elements[this.#elements.length - 1];

    this.#elements = this.#elements.slice(1, this.#elements.length);

    return poppedElement;
  }
};
