// 引入等比适配插件
const px2rem = require('postcss-px2rem');

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16,
});

module.exports = {
    publicPath:'./',
    lintOnSave:false,
    devServer:{
        proxy: {
            '/api': {
                target: 'http://119.23.219.2',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        port: 10010,
        open: true,
        host:'0.0.0.0',
        postcss: {
            plugins: [
              postcss,
            ],
          },
    },
}
