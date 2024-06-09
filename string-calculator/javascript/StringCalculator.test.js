const StringCalculator = require("./StringCalculator");

describe("StringCalculator should", () => {
  const stringCalculator = new StringCalculator();

  test("return 0 when given an empty string", () => {
    expect(stringCalculator.add("")).toBe(0);
  });

  test("return the number when given a single number", () => {
    expect(stringCalculator.add("1")).toBe(1);
  });

  test("return the sum of two numbers", () => {
    expect(stringCalculator.add("1,2")).toBe(3);
  });

  test("return the sum of an unknown number of numbers", () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);

    let numbers = [];

    for (let i = 0; i < randomNumber; i++) {
      numbers.push(i);
    }

    const sum = numbers.reduce((a, b) => a + b);
    const numbersString = numbers.join(",");

    expect(stringCalculator.add(numbersString)).toBe(sum);
  });

  test("handle newline separators", () => {
    expect(stringCalculator.add("1\n2")).toBe(3);
  });

  test("handle newline and comma separators", () => {
    expect(stringCalculator.add("1\n2,3")).toBe(6);
  });
});
