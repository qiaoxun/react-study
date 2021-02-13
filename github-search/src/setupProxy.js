const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api1', {
      target: 'http://localhost:9007',
      changeOrigin: false,
      pathRewrite: {'^/api1': ''}
    }),
    proxy('/api2', {
      target: 'http://localhost:9009',
      changeOrigin: true,
      pathRewrite: {'^/api1': ''}
    })
  )
}
