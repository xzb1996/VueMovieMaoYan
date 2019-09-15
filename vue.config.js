const path = require("path");

module.exports = {
    publicPath:"maoyan",
    devServer:{
        // 路由配置项
        proxy:{
            "/api":{
                target:"http://39.97.33.178",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            // 起别名
            alias:{
                "@":path.join(__dirname,"./src"),
                "api":path.join(__dirname,"./src/api"),
                "components":path.join(__dirname,"./src/components"),
                "common":path.join(__dirname,"./src/common"),
                "views":path.join(__dirname,"./src/views"),
                "utils":path.join(__dirname,"./src/utils"),
                "router":path.join(__dirname,"./src/router"),
                "store":path.join(__dirname,"./src/store"),
            }
        }
    }
}
