module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'complexity': ['error', {max: 7}],
    'max-depth': ['error', {max: 4}],
    'max-statements': ['error', {max: 25}],
    'max-len': ['error', {code: 130}],
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
  },
};
