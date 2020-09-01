module.exports = {
  // chainWebpack 链式编程 configureWebpack 操作对象
  chainWebpack: config => {
    // 为开发模式与发布模式指定不同的打包入口
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config
        .entry('app') // 获得打包入口
        .clear() // 清空打包入口
        .add('./src/main-prod.js') // 设置自己的打包路口

      // 在 externals 里面声明的第三方依赖包, 都不会被打包合并到 chunk-vendors
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        lodash: '_',
        echarts: 'echarts',
        nprogress: 'NProgress',
        'vue-quill-editor': 'VueQuillEditor'
      })
      // 通过插件定制首页内容(title 显示不同)
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })

    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-dev.js')

      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  }
}
