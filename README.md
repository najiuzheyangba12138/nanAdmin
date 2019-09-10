### 这里是DEV分支


#### 文件目录结构
pages  页面
components  组件
style  样式
utils  共有的库或者插件
router  路由文件
store   全局状态管理文件
asset  资源目录

#### 预处理语言
less
npm install less less-loader
默认不支持less   在config.webpack.config.js  把所有的sass改成less

#### UI 框架
antd 框架  用的是less
全局引入  npm install antd  在index.js  下  import 'antd/dist/antd.css'
按需引入

#### 基本配置
起别名     webpack.config.js   alias下添加路径  path.join/path.resolve
服务器代理   webpackDevServer.config.js  proxy
proxy:{
      '/nan':{
        target:'http://www.baidu.com',
        changeOrigin:true,
        pathRewrite:{
          '/nan':''
        }
      }
    },


#### 共有的库

axios  二次封装   默认提交方式
路由
react-redux