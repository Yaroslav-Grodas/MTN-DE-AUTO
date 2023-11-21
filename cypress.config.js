const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "bupmav",
  e2e: {
    baseUrl: 'https://shopmtn.de',
    retries: {
      runMode: 2,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
