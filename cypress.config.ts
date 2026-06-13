import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  watchForFileChanges: false,

  e2e: {
    baseUrl: "https://tutorials.blassacademy.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
