const webpack = require('webpack')

module.exports = runner => {
  return new webpack.HashedModuleIdsPlugin()
}
