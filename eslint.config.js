module.exports = {
  ignores: [
    'next.config.js',
    'tailwind.config.js',
    'postcss.config.js',
    'functions/index.js',
  ],
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    // 你自己的规则
  },
}