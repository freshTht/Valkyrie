// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };

/* eslint-disable */

const path = require('path');

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    // presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver', {
          alias: {
            '@app': path.join(__dirname),
            'lib': path.join(__dirname, 'lib')
          }
        },
      ],
      [
        '@babel/plugin-transform-private-methods', {
          'loose': true,
        },
      ],
    ],
  };
}
