# Canonical ESLint (React/JSX) Config

[![Travis build status](http://img.shields.io/travis/gajus/eslint-config-canonical-react/master.svg?style=flat-square)](https://travis-ci.org/gajus/eslint-config-canonical-react)
[![NPM version](http://img.shields.io/npm/v/eslint-config-canonical-react.svg?style=flat-square)](https://www.npmjs.org/package/eslint-config-canonical-react)

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. You can learn more about [ESLint shareable configuration](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

To use the JavaScript Canonical Style shareable config, first run this:

```bash
npm install eslint-config-canonical eslint-config-canonical-react eslint-plugin-react
```

Then, add this to your .eslintrc file:

```json
{
    "extends": [
        "canonical",
        "canonical-react"
    ]
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.

### Looking for something easier than this?

The easiest way to use JavaScript Canonical Style to check your code is to use the [`canonical`](https://github.com/gajus/canonical) package. This comes with a global Node command line program (`canonical`) that you can run or add to your `npm test` script to quickly check your style.
