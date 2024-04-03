const isCI = process.env.CI;
const addons = ['@plonegovbr/volto-vlibras'];
const theme = '';

if (isCI) {
  addons.push('@plonegovbr/volto-vlibras:myCIProfile');
}

module.exports = {
  addons,
  theme,
};
