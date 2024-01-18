const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("@cypress/code-coverage/task")(on, config);
			on("file:preprocessor", require("@cypress/code-coverage/use-babelrc"));
			return config;
    },
  },
});
