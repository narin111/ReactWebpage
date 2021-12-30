const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  console.log('proxy');
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://openapi.naver.com',
      changeOrigin: true,
      pathRewrite: { '^/api/': '/' },
    })
  );
};
