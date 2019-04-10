# Prettier configuration

[![NPM Version](https://img.shields.io/npm/v/@studiometa/prettier-config.svg?style=flat-square)](https://www.npmjs.com/package/@studiometa/prettier-config)
[![Dependency Status](https://img.shields.io/david/studiometa/prettier-config.svg?label=deps&style=flat-square)](https://david-dm.org/studiometa/prettier-config)
[![devDependency Status](https://img.shields.io/david/dev/studiometa/prettier-config.svg?label=devDeps&style=flat-square)](https://david-dm.org/studiometa/prettier-config?type=dev)

> A simple and single Prettier configuration to be used across projects.

## Installation

Install the package with Yarn:

```bash
$ yarn add --dev @studiometa/prettier-config
```

Or with NPM:

```bash
$ npm install --save-dev @studiometa/prettier-config
```

## Usage

Create a `.prettierrc.js` file in the root of your project with the following:

```js
module.exports = require('@studiometa/prettier-config');
```

## Contributing

This project uses [Git Flow](https://github.com/petervanderdoes/gitflow-avh) as a branching model, new feature will be added by pull-requests of `feature/` branches against `develop`. 

The JS files are linted with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io). You can check for linting errors before your commits by running the following scripts with Yarn:

```bash
$ yarn lint # Check for linting errors
$ yarn fix # Fix the fixable linting errors
```

Or with NPM:

```bash
$ npm run lint # Check for linting errors
$ npm run fix # Fix the fixable linting errors
```
