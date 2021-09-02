const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

export default (config, env, helpers) => {
  const context = path.resolve(__dirname, 'src', 'assets')
  config.plugins.push(new CopyWebpackPlugin([{ context, from: 'robots.txt' }]))
  config.plugins.push(new CopyWebpackPlugin([{ context, from: 'browserconfig.xml' }]))
  config.plugins.push(new CopyWebpackPlugin([{ context, from: 'CNAME' }]))

  return config
}
