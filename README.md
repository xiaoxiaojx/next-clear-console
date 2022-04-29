# Next.js + Clear Console.log

Clear console.log during production build in your Next.js project

## Installation

```
npm install --save next-clear-console
```

or

```
yarn add next-clear-console
```

### Usage

You can set the consoles to be cleared by using the pure_funcs field, This is to ensure that no logs are leaked from the user's browser console.

```js
// next.config.js

const withClearConsole = require("next-clear-console")({
  // pure_funcs: ["console.log", "console.info", "console.warn", "console.error"]
  pure_funcs: ["console.log", "console.info", "console.warn"],
});

module.exports = withClearConsole({
  webpack(config, options) {
    return config;
  },
});
```
