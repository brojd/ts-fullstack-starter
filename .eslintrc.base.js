module.exports = {
  globals: {
    it: true,
    describe: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      '../server/tsconfig.json',
      '../client/tsconfig.json',
      '../shared/tsconfig.json'
    ]
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/react'
  ],
  rules: {
    'no-useless-escape': 0,
    'no-duplicate-imports': 'error',
    'react/jsx-no-target-blank': 0,
    'require-yield': 0,
    'no-case-declarations': 0,
    // TypeScript-specific
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      { args: 'after-used', ignoreRestSiblings: true, argsIgnorePattern: '^_' }
    ],
    '@typescript-eslint/prefer-optional-chain': 'error'
  }
};
