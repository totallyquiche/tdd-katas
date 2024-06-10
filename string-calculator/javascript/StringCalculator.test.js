const StringCalculator = require("./StringCalculator");

describe("StringCalculator", () => {
  let stringCalculator;

  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  test(".add() returns 0 when given an empty string", () => {
    expect(stringCalculator.add("")).toBe(0);
  });

  test(".add() returns the number when given a single number", () => {
    expect(stringCalculator.add("1")).toBe(1);
  });

  test(".add() returns the sum of two numbers", () => {
    expect(stringCalculator.add("1,2")).toBe(3);
  });

  test(".add() returns the sum of an unknown number of numbers", () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);

    let numbers = [];

    for (let i = 0; i < randomNumber; i++) {
      numbers.push(i);
    }

    const sum = numbers.reduce((a, b) => a + b);
    const numbersString = numbers.join(",");

    expect(stringCalculator.add(numbersString)).toBe(sum);
  });

  test(".add() handles newline separators", () => {
    expect(stringCalculator.add("1\n2")).toBe(3);
  });

  test(".add() handles newline and comma separators", () => {
    expect(stringCalculator.add("1\n2,3")).toBe(6);
  });

  test(".add() handles custom separator", () => {
    expect(stringCalculator.add("//[;]\n1;2")).toBe(3);
  });

  test(".add() handles newline, comma, and custom separators", () => {
    expect(stringCalculator.add("//[;]\n1\n2,3;4")).toBe(10);
  });

  test(".add() throws an error if a negative number is given", () => {
    const expectedError = new RangeError("negatives not allowed");

    expect(() => stringCalculator.add("-1")).toThrow(expectedError);
  });

  test(".add() shows the negatives in the error when multiple negatives are given", () => {
    const expectedError = new RangeError("negatives not allowed: -1, -1");

    expect(() => stringCalculator.add("-1,-1")).toThrow(expectedError);
  });

  test(".add() shows only the negatives in the error", () => {
    const expectedError = new RangeError("negatives not allowed: -1, -3");

    expect(() => stringCalculator.add("-1,2,-3")).toThrow(expectedError);
  });

  test(".add() ignores numbers larger than 1000", () => {
    expect(stringCalculator.add("1,1000,1001")).toBe(1001);
  });

  test(".add() handles delimiters of any length", () => {
    expect(stringCalculator.add("//[***]\n1***2")).toBe(3);
    expect(stringCalculator.add("//[####]\n1####2")).toBe(3);
    expect(stringCalculator.add("//[&&&&&]\n1&&&&&2,3\n4")).toBe(10);
  });

  test(".add() handles multiple customer delimiters", () => {
    expect(stringCalculator.add("//[*][#]\n1*2#3")).toBe(6);
    expect(stringCalculator.add("//[*][#]\n1*2#3,4\n5")).toBe(15);
  });

  test(".getCalledCount() returns the number of times .add() has been invoked", () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < randomNumber; i++) {
      stringCalculator.add("");
    }

    expect(stringCalculator.getCalledCount()).toBe(randomNumber);
  });
});
