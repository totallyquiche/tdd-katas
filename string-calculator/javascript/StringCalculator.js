module.exports = class StringCalculator {
  #addInvokeCount = 0;
  #maximumNumber = 1000;

  Add(numbersString) {
    this.#addInvokeCount++;

    validateString(numbersString);

    let numbers = splitStringOnDelimiters(
      stripDelimiterDeclaration(numbersString),
      getDelimiters(numbersString)
    );

    numbers = filterNumbersByMaximumValue(numbers, this.#maximumNumber);

    validatePositiveNumbers(numbers);

    return addNumbers(numbers);
  }

  GetCalledCount() {
    return this.#addInvokeCount;
  }
};

const getDelimiters = (numbersString) => {
  let delimiters = [",", "\n"];

  if (numbersString.startsWith("//")) {
    [...numbersString.matchAll(/\[(.*?)\]/g)].forEach((match) => {
      delimiters.push(match[1]);
    });
  }

  return delimiters;
};

const validateString = (string) => {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string, got something else");
  }
};

const splitStringOnDelimiters = (string, delimiters) => {
  delimiters.forEach((delimiter) => {
    string = string.split(delimiter).join(",");
  });

  return string.split(",");
};

const stripDelimiterDeclaration = (numbersString) => {
  if (numbersString.startsWith("//")) {
    numbersString = numbersString.substring(
      numbersString.indexOf("\n"),
      numbersString.length
    );
  }

  return numbersString;
};

const filterNumbersByMaximumValue = (numbers, max) => {
  return numbers.filter((number) => number <= max);
};

const getUniqueNegativeNumbers = (numbers) => {
  return numbers
    .filter((number) => number < 0)
    .filter((number, index) => numbers.indexOf(number) === index);
};

const validatePositiveNumbers = (numbers) => {
  let uniqueNegativeNumbers = getUniqueNegativeNumbers(numbers);

  if (uniqueNegativeNumbers.length > 0) {
    throw new RangeError(
      "negatives not allowed: " + uniqueNegativeNumbers.join(", ")
    );
  }
};

const addNumbers = (numbers) => {
  return numbers.reduce((a, b) => Number(a) + Number(b), 0);
};
