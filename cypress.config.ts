import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 800,
  video: false,
  screenshotOnRunFailure: false,

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "http://localhost:6006",
    specPattern: "src/**/*spec.{js,jsx,ts,tsx}",
  },

  component: {
    setupNodeEvents(on, config) {},
    specPattern: "src/**/*spec.{js,jsx,ts,tsx}",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
