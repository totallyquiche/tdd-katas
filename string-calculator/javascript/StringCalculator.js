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

    const negatives = [];

    let sum = 0;

    numbers.forEach((number) => {
      number = parseInt(number);

      if (number < 0) {
        negatives.push(number);
      }

      sum += number;
    });

    if (negatives.length === 1) {
      throw new RangeError("negatives not allowed");
    } else if (negatives.length) {
      throw new RangeError("negatives not allowed: " + negatives.join(", "));
    }

    return sum || 0;
  }
};
