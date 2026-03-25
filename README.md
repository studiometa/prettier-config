# @studiometa/prettier-config

[![NPM Version](https://img.shields.io/npm/v/@studiometa/prettier-config.svg?style=flat&colorB=3e63dd&colorA=414853)](https://www.npmjs.com/package/@studiometa/prettier-config/)
[![Downloads](https://img.shields.io/npm/dm/@studiometa/prettier-config?style=flat&colorB=3e63dd&colorA=414853)](https://www.npmjs.com/package/@studiometa/prettier-config/)
[![Size](https://img.shields.io/bundlephobia/minzip/@studiometa/prettier-config?style=flat&colorB=3e63dd&colorA=414853&label=size)](https://bundlephobia.com/package/@studiometa/prettier-config)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@studiometa/prettier-config?style=flat&colorB=3e63dd&colorA=414853)](https://david-dm.org/studiometa/prettier-config)

> Studio Meta's favorite Prettier configuration to be used across projects.

## Installation

Install the package with NPM:

```bash
$ npm install --save-dev prettier @studiometa/prettier-config
```

## Usage

Create a `.prettierrc.js` file in the root of your project with the following:

```js
module.exports = require('@studiometa/prettier-config');
```

## Contributing

This project uses a trunk-based development model, new features are added by pull-requests against `main`.

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
