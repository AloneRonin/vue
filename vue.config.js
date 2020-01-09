const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.PUBLIC_PATH, /* 部署应用包时的基本URL 静态资源路径 */
  outputDir: 'dist', /* build 时生成的生产环境构建文件的目录 */
  assetsDir: 'static', /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  indexPath: 'index.html', /* 指定生成的 index.html 的输出路径 (相对于 outputDir) */
  filenameHashing: true, /* 文件名哈希 */
  lintOnSave: false, /* eslint-loader 是否在保存的时候检查 */
  runtimeCompiler: true, /* 设置为 true 后你就可以在 Vue 组件中使用 template 选项 */
  productionSourceMap: false, /* 是否需要生产环境的 source map */
  parallel: require('os').cpus().length > 1, /* 该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建 */
  css: {
    sourceMap: false, /* 是否为 CSS 开启 source map */
    loaderOptions: {
      /* 给 stylus-loader 传递选项 */
      stylus: {
        /* @/ 是 src/ 的别名 */
        import: '~@/assets/stylus/mixin.styl'
      }
    }
  },
  devServer: {
    hot: true, /* 热更新 */
    open: true, /* 自动打开浏览器 */
    host: '0.0.0.0',
    port: 3005,
    proxy: { /* 跨域代理 */
      '/development': {
        target: 'http://testcharm.yktour.com.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/development': ''
        }
      },
      '/test': {
        target: 'http://testcharm.yktour.com.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/test': ''
        }
      },
      '/production': {
        target: 'https://charm.yktour.com.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/production': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        src: resolve('src'),
        'vue$': 'vue/dist/vue.js'
      }
    }
  },
  chainWebpack: (config) => {
    /* 禁止预加载 https://blog.csdn.net/xiao_yu_liu/article/details/101050640 */
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}
