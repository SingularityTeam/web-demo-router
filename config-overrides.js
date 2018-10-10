const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  // 按需加载 antd 的组件
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config
  );
  return config;
};
