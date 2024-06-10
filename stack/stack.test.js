const Stack = require("./Stack");

describe("Stack", () => {
  test("is empty when instantiated", () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);
  });

  test("is not empty after push", () => {
    const stack = new Stack();

    stack.push(0);

    expect(stack.isEmpty()).toBe(false);
  });

  test;
});
