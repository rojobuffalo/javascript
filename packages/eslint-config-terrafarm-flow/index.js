module.exports = {
  extends: [
    'plugin:flowtype/recommended',
    'terrafarm',
  ],
  plugins: [
    'flowtype',
  ],
  rules: require('./rules'),
};
