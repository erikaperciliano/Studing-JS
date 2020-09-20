module.exports = {
    entry: ['@babel/polyfill', './src/main.js'], //arquivo principal
    output: {
        path: __dirname + '/public', // qual o lugar que deve enviar o cód convertido p/ antes do ES6
        filename: 'bundle.js',
    },
    module:{
        devServer:{
            contentBase: __dirname + '/public'
        },
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    }
}; 