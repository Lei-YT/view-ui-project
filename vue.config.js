// vue.config.js
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'
var path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => {
        //设置路径别名 key,value自行定义，比如.set('@@', resolve('src/components'))
        // config.resolve.alias.set('@@', resolve('src/components'))
        // 移除 prefetch 插件
        config.plugins.delete('prefetch');
        config.plugins.delete('preload')
    },
    productionSourceMap: false, //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    configureWebpack: config => {
        if (isProduction) {
            // 开启gzip压缩
            config.plugins.push(new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: /\.js$|\.html$|\.json$|\.css/,
                threshold: 10240,
                minRatio: 0.8
            }))

            //为了防止文件过大，把公共代码分离
            config.optimization = {
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'all',
                    maxInitialRequests: Infinity,
                    minSize: 20000,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module) {
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                                return `Lc.${packageName.replace('@', '')}`
                            }
                        }
                    }
                }
            }
        }
    },
}
