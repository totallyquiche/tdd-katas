const StringCalculator = require("../../StringCalculator");

describe("Add should", () => {
  const stringCalculator = new StringCalculator();

  test("be a public function", () => {
    expect(stringCalculator.Add).toBeInstanceOf(Function);
  });

  test("only accept a string", () => {
    const expectedError = new TypeError(
      "Expected a string, got something else"
    );

    expect(() => {
      stringCalculator.Add(0);
    }).toThrow(expectedError);

    expect(() => {
      stringCalculator.Add(null);
    }).toThrow(expectedError);

    expect(() => {
      stringCalculator.Add(undefined);
    }).toThrow(expectedError);

    expect(() => {
      stringCalculator.Add(true);
    }).toThrow(expectedError);

    expect(() => {
      stringCalculator.Add([]);
    }).toThrow(expectedError);

    expect(() => {
      stringCalculator.Add({});
    }).toThrow(expectedError);

    expect(() => {
      stringCalculator.Add("");
    }).not.toThrow();
  });

  test("return 0 for an empty string", () => {
    expect(stringCalculator.Add("")).toBe(0);
  });

  test("return the number when only one number is given", () => {
    expect(stringCalculator.Add("0")).toBe(0);
    expect(stringCalculator.Add("1")).toBe(1);
  });

  test("return the sum of two numbers", () => {
    expect(stringCalculator.Add("0,1")).toBe(1);
    expect(stringCalculator.Add("1,1")).toBe(2);
    expect(stringCalculator.Add("1,2")).toBe(3);
  });

  test("return the sum of an unknown amount of numbers", () => {
    const maxNumberCount = 1000;
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    let numbers = [];
    let sum = 0;

    for (let i = 0; i < getRandomNumber(0, maxNumberCount); i++) {
      const number = getRandomNumber(0, i);

      sum += number;
      numbers.push(String(number));
    }

    expect(stringCalculator.Add(numbers.join(","))).toBe(sum);
  });

  test("allow comma separator", () => {
    expect(stringCalculator.Add("1,2")).toBe(3);
  });

  test("allow comma separator", () => {
    expect(stringCalculator.Add("1\n2")).toBe(3);
  });

  test("allow a mix of comma and newline separators", () => {
    expect(stringCalculator.Add("1\n2,3")).toBe(6);
  });

  test("allow delimiter specification", () => {
    expect(stringCalculator.Add("//[;]\n1;2")).toBe(3);
  });

  test("allow a delimiter of arbitrary length", () => {
    expect(stringCalculator.Add("//[***]\n1***2")).toBe(3);
  });

  test("allow multiple delimiters", () => {
    expect(stringCalculator.Add("//[*][%]\n1*2%3")).toBe(6);
  });

  test("allow multiple delimiters with length greater than one", () => {
    expect(stringCalculator.Add("//[**][%%]\n1**2%%3")).toBe(6);
  });

  test("not allow negative numbers", () => {
    expect(() => {
      stringCalculator.Add("-1");
    }).toThrow();
  });

  test("display a unique list of negative numbers in error", () => {
    const negativeNumbers = [-1, -2, -2, -3];
    const expectedError = new RangeError("negatives not allowed: -1, -2, -3");

    expect(() => {
      stringCalculator.Add(negativeNumbers.join(","));
    }).toThrow(expectedError);
  });

  test("ignore numbers larger than 1000", () => {
    expect(stringCalculator.Add("1001")).toBe(0);
  });
});
