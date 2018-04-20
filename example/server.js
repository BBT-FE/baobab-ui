const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./base')
const os = require('os')
const port = 8081

function getIP() {
  let IPv4 = '127.0.0.1'
  let interfaces = os.networkInterfaces() // 返回对象, 包含被赋予网络地址的网络接口
  for (let key in interfaces) {
    interfaces[key].some(function(details) {
      if (details.family == 'IPv4' && key == 'en8') {
        IPv4 = details.address
        return true
      }
    })
  }
  return IPv4
}

const host = getIP()
const localServer = `http://${host}:${port}`
config.entry.app.unshift('webpack-dev-server/client?' + localServer)
const compiler = webpack(config)

new WebpackDevServer(compiler, {
  contentBase: __dirname,
  stats: {
    colors: true,
    modules: false,
    chunks: false
  },
  disableHostCheck: true
})
.listen(port, undefined, function() {
  console.log(`\n ==> ${localServer} \n`)
})
