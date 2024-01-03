const { join } = require('path');

module.exports = {
  root: true,
  extends: '@arcblock/eslint-config-ts',
  parserOptions: {
    project: [join(__dirname, 'tsconfig.eslint.json'), join(__dirname, 'tsconfig.json')],
  },
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    'react/function-component-definition': 'off',
    'import/newline-after-import': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/self-closing-comp': 'off',
  },
};
