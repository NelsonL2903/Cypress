const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'biqd2s',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
