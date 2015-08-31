# Mores ESLint (React/JSX) Shareable Config

[![Travis build status](http://img.shields.io/travis/gajus/eslint-plugin-mores-react/master.svg?style=flat-square)](https://travis-ci.org/gajus/eslint-plugin-mores-react)
[![NPM version](http://img.shields.io/npm/v/eslint-plugin-mores-react.svg?style=flat-square)](https://www.npmjs.org/package/eslint-plugin-mores-react)

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

To use the JavaScript Mores Style shareable config, first run this:

```bash
npm install eslint-config-mores eslint-config-mores-react eslint-plugin-react
```

Then, add this to your .eslintrc file:

```json
{
    "extends": [
        "mores",
        "mores-react"
    ]
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.

### Looking for something easier than this?

The easiest way to use JavaScript Mores Style to check your code is to use the [`mores`](https://github.com/gajus/mores) package. This comes with a global Node command line program (`mores`) that you can run or add to your `npm test` script to quickly check your style.
