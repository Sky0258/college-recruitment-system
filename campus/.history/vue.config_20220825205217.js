module.exports = {
    publicPath:'./',
    lintOnSave:false,
    devServer:{
        proxy: {
            '/api': {
                target: 'http://119.23.219.2/v2/api-docs',
                changeOrigin: true,
                pathRewrite: {
                    '/api-docs': ''
                }
            }
        },
        port: 10010,
        open: true,
        host:'0.0.0.0',
    },
}
