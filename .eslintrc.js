module.exports = {
  root: true, // このファイルの階層をrootとする
  env: {
    browser: true,
    es2020: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "prefer-const": "error",
  },
};
