import js from '@eslint/js';

export default [
  {
    ignores: [
      'next.config.js',
      'tailwind.config.js',
      'postcss.config.js',
      'functions/index.js',
    ],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      // 你自己的规则
    },
  },
];