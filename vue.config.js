const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://140.210.193.35:3001',
        // target: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000' : 'https://140.210.193.35:3001',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
})
