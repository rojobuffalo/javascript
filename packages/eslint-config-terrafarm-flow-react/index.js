module.exports = {
  extends: [
    'terrafarm-flow',
    'terrafarm-react',
  ],
  // terrafarm-react overrides some terrafarm-flow rules from the airbnb
  // import, so we need to explicitly reapply the rules.
  rules: Object.assign(
    {},
    require('eslint-config-terrafarm-flow/rules'),
    require('eslint-config-terrafarm-react/rules'),
    require('./rules')
  ),
};
