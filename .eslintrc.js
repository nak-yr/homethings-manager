module.exports = {
  env: {
    browser: true,
    es2020: true,
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  plugins: ["react", "prettier"],
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended", "prettier/react"],
  parserOptions: {
    version: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
