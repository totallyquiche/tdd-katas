const StringCalculator = require("../../StringCalculator");

describe("GetCalledCount should", () => {
  const stringCalculator = new StringCalculator();

  test("return 0 if the add method has not been invoked", () => {
    expect(stringCalculator.GetCalledCount()).toBe(0);
  });

  test("return the number of times add method has been invoked", () => {
    const invokeCount = Math.floor(Math.random() * 5 + 1);

    for (let i = 0; i < invokeCount; i++) {
      stringCalculator.Add("");
    }

    expect(stringCalculator.GetCalledCount()).toBe(invokeCount);
  });
});
