module.exports = {
  outputDir: './dist',
  configureWebpack: {
    resolve: {
      alias: {
        component: '@/components'
      }
    }
  }
}
