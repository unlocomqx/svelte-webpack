module.exports = {
  presets: [
    ['@babel/preset-env', {
      // debug: true,
      useBuiltIns: 'usage',
      corejs: 3,
      modules: 'commonjs',
    }],
  ],
  plugins: [
    'add-module-exports',
  ],
};
