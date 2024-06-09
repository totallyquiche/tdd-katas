module.exports = class {
  add(numberString) {
    const parts = numberString.split(/[,\n]/);

    return parts.reduce((a, b) => parseInt(a) + parseInt(b), 0) || 0;
  }
};
