<div align="center"><img alt="logo" src="./docs/icon.png" width="70" /></div>

<h1 align="center">VLibras support for Plone</h1>

This addon integrates [VLibras](https://www.gov.br/governodigital/pt-br/vlibras/), a service for automatic translation of web content into Lingua Brasileira de Sinais, in a [Plone](https://plone.org) project using [Volto](https://github.com/plone/volto) user interface.

<div align="center">

[![npm](https://img.shields.io/npm/v/@plonegovbr/volto-vlibras)](https://www.npmjs.com/package/@plonegovbr/volto-vlibras)
[![Code analysis checks](https://github.com/plonegovbr/volto-vlibras/actions/workflows/code.yml/badge.svg)](https://github.com/plonegovbr/volto-vlibras/actions/workflows/code.yml)
[![Unit tests](https://github.com/plonegovbr/volto-vlibras/actions/workflows/unit.yml/badge.svg)](https://github.com/plonegovbr/volto-vlibras/actions/workflows/unit.yml)

[![GitHub contributors](https://img.shields.io/github/contributors/plonegovbr/volto-vlibras)](https://github.com/plonegovbr/volto-vlibras)
[![GitHub Repo stars](https://img.shields.io/github/stars/plonegovbr/volto-vlibras?style=social)](https://github.com/plonegovbr/volto-vlibras)

</div>

## Screenshots

### Opening VLibras Widget

<img alt="VLibras: Abertura" src="./docs/vlibras-opening.gif" width="400" />

### Using the Widget

<img alt="VLibras: Leitura" src="./docs/vlibras-usage.gif" width="400" />


## Install

### New Volto Project

Create a Volto project

```shell
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @plonegovbr/volto-vlibras
cd my-volto-project
```

### Existing Volto Project

If you already have a Volto project, just update `package.json`:

```JSON
"addons": [
    "@plonegovbr/volto-vlibras"
],

"dependencies": {
    "@plonegovbr/volto-vlibras": "*"
}
```
### Configuration <a name="config"></a>

To inject the component in the project add the appextras configuration in the config.js file.

A suggested way is to use `appExtras` from settings object ([docs](https://6.dev-docs.plone.org/volto/recipes/appextras.html)):

```jsx
import Libras from '@plonegovbr/volto-vlibras/components/Libras';

export const settings = {
  ...defaultSettings,
  appExtras: [
    ...defaultSettings.appExtras,
    {
      match: '',
      component: Libras,
    },
  ],
};
```

### Test it

After adding the add-on, and its configuration, you need to install it and then `start` the project:

```shell
yarn install
yarn start
```

Then go to http://localhost:3000/

## Contribute

- [Issue Tracker](https://github.com/plonegovbr/volto-vlibras/issues)
- [Source Code](https://github.com/plonegovbr/volto-vlibras/)

## Credits

The development of this add on was sponsored by the Brazilian Plone Community

[![PloneGov-Br](docs/plonegovbr.png)](https://plone.org.br/)

## License

The project is licensed under [MIT](./LICENSE).
