const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "bupmav",
  e2e: {
    baseUrl: 'https://shopmtn.de',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
