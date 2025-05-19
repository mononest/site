import js from '@eslint/js';

export default [
  {
    ignores: ["index.js"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    rules: {
      "prefer-arrow-callback": "error",
      "quotes": ["error", "double", { allowTemplateLiterals: true }],
      "no-restricted-globals": ["error", "name", "length"],
    },
  },
];