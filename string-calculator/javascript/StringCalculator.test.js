const StringCalculator = require("./StringCalculator");

describe("StringCalculator should", () => {
  test("return 0 when given an empty string", () => {
    const stringCalculator = new StringCalculator();

    expect(stringCalculator.add("")).toBe(0);
  });
});
