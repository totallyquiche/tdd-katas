module.exports = class {
  #separators = [",", "\n"];
  #calledCount = 0;

  _getSeparators(numbersString) {
    if (numbersString.startsWith("//")) {
      const customSeparator = numbersString.slice(
        2,
        numbersString.indexOf("\n")
      );

      this.#separators.push(customSeparator);
    }

    return this.#separators;
  }

  _getNumbers(numbersString) {
    const separators = this._getSeparators(numbersString);

    if (this.#separators.length > 2) {
      numbersString = numbersString.slice(
        numbersString.indexOf("\n") + 1,
        numbersString.length
      );
    }

    let numbers = [numbersString];

    this.#separators.forEach((separator) => {
      let parts = [];

      numbers.forEach((number) => {
        parts = parts.concat(number.split(separator));
      });

      numbers = parts;
    });

    return numbers;
  }

  _checkForNegatives(numbers) {
    const negatives = [];

    numbers.forEach((number) => {
      number = parseInt(number);

      if (number < 0) {
        negatives.push(number);
      }
    });

    if (negatives.length === 1) {
      throw new RangeError("negatives not allowed");
    } else if (negatives.length) {
      throw new RangeError("negatives not allowed: " + negatives.join(", "));
    }
  }

  _calculateSum(numbers) {
    let sum = 0;

    numbers.forEach((number) => {
      sum += parseInt(number);
    });

    return sum || 0;
  }

  add(numbersString) {
    const numbers = this._getNumbers(numbersString);

    this._checkForNegatives(numbers);

    this.#calledCount++;

    return this._calculateSum(numbers);
  }

  getCalledCount() {
    return this.#calledCount;
  }
};
