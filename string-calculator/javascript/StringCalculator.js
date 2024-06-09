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

    return numbers.reduce((a, b) => parseInt(a) + parseInt(b), 0) || 0;
  }
};
