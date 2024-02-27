module.exports = {
  globals: {
    Config: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react-hooks', 'prettier', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    'react/display-name': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/jsx-props-no-spreading': ['off'],
    'react/state-in-constructor': 0,
    'consistent-return': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'quotes': 'off',
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [',js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'prettier/prettier': 'error',
  },
};
