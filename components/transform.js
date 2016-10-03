"use strict";

module.exports = {
  intToCurrency: function intToCurrency(val) {
    return "€ " + (Number(val) / 100).toFixed(2);
  }
};