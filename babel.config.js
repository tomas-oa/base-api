module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@routes': './src/routes',
          '@controllers': './src/controllers',
          '@middlewares': './src/middlewares',
          '@models': './src/models',
          '@utils': './src/utils',
          '@config': './src/config'
        }
      }
    ]
  ]
};
