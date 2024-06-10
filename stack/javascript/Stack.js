class Stack {
  #maxSize;
  #elements = [];

  constructor(maxSize) {
    if (maxSize < 0) {
      throw new RangeError("invalid stack size");
    }

    if (maxSize === 0) {
      return new NullStack();
    }

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

  peek() {
    if (this.isEmpty()) {
      throw new Error("underflow error");
    }

    return this.#elements[this.#elements.length - 1];
  }
}

class NullStack extends Stack {
  isEmpty() {
    return true;
  }

  size() {
    return 0;
  }

  push(element) {
    throw new Error("overflow error");
  }

  pop() {
    throw new Error("underflow error");
  }

  peek() {
    throw new Error("underflow error");
  }
}

module.exports = Stack;
