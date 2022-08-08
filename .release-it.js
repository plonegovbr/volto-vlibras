const fs = require('fs');

module.exports = {
  npm: {
    publish: true,
  },
  git: {
    commitMessage: 'chore: release v${version}',
  },
  github: {
    release: true,
  },
  plugins: {
    '@release-it/conventional-changelog': {
      infile: 'CHANGELOG.md',
      header: '# Changelog',
      preset: {
        name: 'conventionalcommits',
      },
    },
  },
};
