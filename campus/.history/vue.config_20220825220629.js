module.exports = {
    publicPath:'./',
    lintOnSave:false,
    devServer:{
        proxy: {
            '/': {
                target: 'http://119.23.219.2/',
                changeOrigin: true,
                pathRewrite: {
                    '/': ''
                }
            }
        },
        port: 10010,
        open: true,
        host:'0.0.0.0',
    },
}
