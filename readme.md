## Getting Started

- Clone the repo: [https://github.com/miles-118/react-ridge-state-issues](https://github.com/miles-118/react-ridge-state-issues)
- Run `yarn` on the root directory.
- Then run `yarn web` on the root directory.
- Open `http://localhost:3000` in your browser
- See Error

```
ReferenceError: exports is not defined in ES module scope This file is being treated as an ES module because it has a '.js' file extension and '../react-ridge-state-issues/node_modules/react-ridge-state/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
```

## Tests

- Adding `["@babel/plugin-transform-modules-commonjs"],` to `apps/next/.babelrc.json` changes the error to `ESM packages (react-ridge-state) need to be imported. Use 'import' to reference the package instead. https://nextjs.org/docs/messages/import-esm-externals`

```
{
  "presets": [
    "next/babel",
    ["babel-preset-expo", { "jsxRuntime": "automatic" }]
  ],
  "plugins": [
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
    ["@babel/plugin-transform-modules-commonjs"],
    "react-native-reanimated/plugin"
  ]
}
```

