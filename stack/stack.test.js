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
});
