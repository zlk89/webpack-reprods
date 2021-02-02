module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: 'defaults',
      },
    ],
    '@babel/typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
    // 'transform-es2015-modules-commonjs',
  ],
};
