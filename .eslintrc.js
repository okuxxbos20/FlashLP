module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  },
  overrides: [
    // Next.jsのpagesではdefault exportで記述するため、rulesをoverrideする
    {
      files: ['*/pages/*', './src/createEmotionCache.ts'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'error'
      }
    }
  ]
}
