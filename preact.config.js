const CopyWebpackPlugin = require('copy-webpack-plugin')

export default (config, env, helpers) => {
  config.plugins.push(new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: 'robots.txt' }]))
  config.plugins.push(new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: 'browserconfig.xml' }]))
  config.plugins.push(new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: 'CNAME' }]))

  return config
}
