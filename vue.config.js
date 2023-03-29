const { defineConfig } = require('@vue/cli-service');
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.resolve("@/assets/img"),

      }
    },
  }

})
