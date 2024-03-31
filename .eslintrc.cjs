/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'no-return-assign': 'off',
        'eqeqeq': 'off',
        'semi': 'error',
        'eol-last': ['error', 'always'],
        'max-params': 'off',
        'no-mixed-spaces-and-tabs': "off",
        'comma-spacing': ['error', {'before': false, 'after': true}]
    }
};
