module.exports = class {
  add(numbersString) {
    const separators = [",", "\n"];

    if (numbersString.startsWith("//")) {
      const newlineIndex = numbersString.indexOf("\n");

      separators.push(numbersString.slice(2, newlineIndex));

      numbersString = numbersString.slice(
        newlineIndex + 1,
        numbersString.length
      );
    }

    let numbers = [numbersString];

    separators.forEach((separator) => {
      let parts = [];

      numbers.forEach((number) => {
        parts = parts.concat(number.split(separator));
      });

      numbers = parts;
    });

    const reducer = (a, b) => {
      const currentNumber = parseInt(a);
      const previousNumber = parseInt(b);

      if (currentNumber < 0 || previousNumber < 0) {
        throw new RangeError("negatives not allowed");
      }

      return currentNumber + previousNumber;
    };

    return numbers.reduce(reducer, 0) || 0;
  }
};
