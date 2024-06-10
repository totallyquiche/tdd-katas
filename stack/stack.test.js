const Stack = require("./Stack");

describe("Stack", () => {
  test("is empty when instantiated", () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);
  });
});
