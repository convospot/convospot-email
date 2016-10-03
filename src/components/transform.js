module.exports = {
  intToCurrency(val) {
    return `€ ${(Number(val)/100).toFixed(2)}`
  }
};
