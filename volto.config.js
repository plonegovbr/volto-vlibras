const isCI = process.env.CI;
const addons = ['@plonegovbr/volto-vlibras'];
const theme = '';

if (isCI) {
  addons.push('@plonegovbr/volto-vlibras:ciProfile');
}

module.exports = {
  addons,
  theme,
};
