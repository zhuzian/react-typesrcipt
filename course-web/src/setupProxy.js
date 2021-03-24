const {createProxyMiddleware} = require('http-proxy-middleware')
// 跨域设置
module.exports = function (app) {
    app.use(createProxyMiddleware('/admin', {
        target: "http://8.135.15.109:9800/api/v1/admin",
        pathRewrite: { '^/admin': '' },
        changeOrigin: true
    }))
    app.use(createProxyMiddleware('/api', {
        target: "http://news.baidu.com/",
        pathRewrite: { '^/api': '' },
        changeOrigin: true
    }))
}