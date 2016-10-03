const translations = require('./translations');

module.exports = (lang, key, values = {}) => {
  if (!translations[lang] || !translations[lang][key])
    throw new Error(`Translation for key ${key} for language ${lang} did not exist`);

  // Got the correct translation, now insert values
  let translated = translations[lang][key];
  for (const key in values) {
    if (values.hasOwnProperty(key)) {
      const findReplacements = new RegExp(`{:${key}}`, 'g');
      translated = translated.replace(findReplacements, values[key]);
    }
  }

  // Throw an error if there are untranslated things in here
  const findRemaining = new RegExp('{[^}]*}', 'g');
  if (translated.match(findRemaining)) {
    throw new Error(`Translation failed for language ${lang} with key ${key} using values ${values}`);
  }
  return translated;
};
