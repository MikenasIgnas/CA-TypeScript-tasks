module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'airbnb-typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: './',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        "comma-dangle": "off",
        '@typescript-eslint/comma-dangle': [2],
        'react/jsx-filename-extension': [0],
        '@typescript-eslint/indent': [0],
        'no-lone-blocks': 0,
        'array-callback-return': 0,
        'max-len': ["error", { code: 250}],
        'linebreak-style': 0
    },
};