module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': [1, 'always', {
      'js': 'never',
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    'no-multiple-empty-lines': 'off',
    'arrow-body-style': 'off',
    'no-debugger': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'func-names': ['off', 'as-needed'],
    'prefer-destructuring': ['error', {'object': true, 'array': false}],
    'padded-blocks': 'off',
    'consistent-return': 'off',
    'no-unused-vars': 'off',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'camelcase': 'off',
  },
  globals: {}
}
