const Stack = require("./Stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("is empty when instantiated", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test("is not empty after push", () => {
    stack.push(0);

    expect(stack.isEmpty()).toBe(false);
  });

  test("is empty after push and pop", () => {
    stack.push(0);
    stack.pop();

    expect(stack.isEmpty()).toBe(true);
  });

  test("throws an underflow error on pop when empty", () => {
    const expectedError = new Error("underflow error");

    expect(() => stack.pop()).toThrow(expectedError);
  });

  test("can return current size", () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < randomNumber; i++) {
      stack.push(i);
    }

    expect(stack.size()).toBe(randomNumber);
  });

  test("throws an overflow error when too many elements are pushed", () => {
    const expectedError = new Error("overflow error");
    const stack = new Stack(0);

    expect(() => stack.push(0)).toThrow(expectedError);
  });

  test("throws range error on invalid stack size", () => {
    const expectedError = new RangeError("invalid stack size");

    expect(() => new Stack(-1)).toThrow(expectedError);
  });

  test("returns last element pushed", () => {
    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
  });

  test("throws an underflow error when peeking an empty stack", () => {
    const expectedError = new Error("underflow error");

    expect(() => stack.peek()).toThrow(expectedError);
  });

  test("peeks the last element pushed", () => {
    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
  });
});
