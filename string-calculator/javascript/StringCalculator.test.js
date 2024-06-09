const StringCalculator = require("./StringCalculator");

describe("StringCalculator should", () => {
  const stringCalculator = new StringCalculator();

  test("return 0 when given an empty string", () => {
    expect(stringCalculator.add("")).toBe(0);
  });

  test("return the number when given a single number", () => {
    expect(stringCalculator.add("1")).toBe(1);
  });
});
