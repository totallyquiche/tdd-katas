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
});
