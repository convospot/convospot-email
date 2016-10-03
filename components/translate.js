'use strict';

var translations = require('./translations');

module.exports = function (lang, key) {
  var values = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  if (!translations[lang] || !translations[lang][key]) throw new Error('Translation for key ' + key + ' for language ' + lang + ' did not exist');

  // Got the correct translation, now insert values
  var translated = translations[lang][key];
  for (var _key in values) {
    if (values.hasOwnProperty(_key)) {
      var findReplacements = new RegExp('{:' + _key + '}', 'g');
      translated = translated.replace(findReplacements, values[_key]);
    }
  }

  // Throw an error if there are untranslated things in here
  var findRemaining = new RegExp('{[^}]*}', 'g');
  if (translated.match(findRemaining)) {
    throw new Error('Translation failed for language ' + lang + ' with key ' + key + ' using values ' + values);
  }
  return translated;
};