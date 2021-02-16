const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api1', {
      target: 'http://localhost:9007',
      changeOrigin: false,
      pathRewrite: {'^/api1': ''}
    })
  )
}
