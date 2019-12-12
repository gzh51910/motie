const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/main.js',
    
    devServer: {
        contentBase: path.join(__dirname, './public'),
        port: 3100
    },
    resolve: {
        // 别名
        alias: {
            '@': path.join(__dirname, './src'),
            '@@': path.join(__dirname, './src/components'),
            '~': path.join(__dirname, './src/pages')
        }
    },
    module: {
        rules: [
            // js加载器
            {
                test: /\.jsx?$/,
                use: [{
                    loader: 'babel-loader',
                    // options:{
                    //     presets:['@babel/preset-react'],
                    //     plugins:[
                    //         ['@babel/proposal-decorators',{legacy: true}],
                    //         ['@babel/proposal-class-properties',{loose: true}],
                    // ["import",{
                    //     "libraryName": "antd",
                    //     "libraryDirectory": "es",
                    //     "style": "css" // `style: true` 会加载 less 文件
                    // }]
                    //     ]
                    // }
                }],
                include: path.join(__dirname, './src')
            },

            // css加载器
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                // include:path.join(__dirname,'./src')
            },

            // sass加载器
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader'],
                include:path.join(__dirname,'./src')
            },

            {
                // 正则匹配所有以.png,jpg,gif结尾的文件
                test: /\.(png|jpe?g|gif)$/,
                // 使用url-loader对图片进行处理
                use: [
                    {
                        loader: 'url-loader',
                        // 将小于8K的图片以base64的形式打包到js文件中
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },

    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],

    performance: {
        hints: "warning", 
        maxAssetSize: 30000000, 
        maxEntrypointSize: 50000000, 
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
        }
    
    }

}