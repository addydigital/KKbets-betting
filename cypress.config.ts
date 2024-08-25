import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    //baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // other configuration options
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  
});
module.exports = {
  projectId: "gaccz1",
  // ...rest of the Cypress project config
};
