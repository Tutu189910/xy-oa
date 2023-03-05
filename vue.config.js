const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        // target: 'http://140.210.193.35:3000',
        target: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000' : 'http://140.210.193.35:3000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
})
