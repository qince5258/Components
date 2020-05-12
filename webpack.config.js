const path = require('path')
module.exports={
    devtool:'eval-source-map',
    entry:__dirname+'/app/main.js',
    output:{
        path:__dirname+'/public',
        filename:"bundle.js"
    },
    devServer:{  //支持本地调试
        contentBase:__dirname+'/public',
        historyApiFallback:true,
        inline:true, //实时刷新
        port:1717
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[{
                    loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    }
                ]
            }
        ]
    }
}