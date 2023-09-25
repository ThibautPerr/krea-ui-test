const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    apiUrl: 'null',
  },
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
  },
})