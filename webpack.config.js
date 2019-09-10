const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
    
})
module.exports = {
    mode:'development',
    plugins:[
        htmlPlugin
    ],
    module:{
        rules:[
            {test:/\.js|.jsx$/,use:'babel-loader',exclude:/node_modules/},
            // {test:/\.css$/,use:[{loader:'style-loader'},{loader:'css-loader',options:{modules:true}}]}
            // {test: /\.css$/,use:['style-loader','css-loader?modules']}
            {test: /\.css$/,use:['style-loader','css-loader']},
            {test:/\.scss$/,use:[{loader:'style-loader'},{loader:'css-loader',options:{modules:{localIdentName:'[path][name]-[local]-[hash:base64:5]'}}},{loader:'sass-loader'}]},
            {test:/\.ttf|.woff|.woff2|.eot|.svg$/,use:['url-loader']},//打包处理字体文字的loader
            { test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=5000' }
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'],
        alias:{
            '@':path.join(__dirname,'./src')
        }
    }
}