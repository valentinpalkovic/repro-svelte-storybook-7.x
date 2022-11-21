const path = require("path");
module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-svelte-csf",
  ],
  features: {
    storyStoreV7: false,
  },
  framework: {
    name: "@storybook/svelte-vite",
    options: {},
  },
  docs: {
    docsPage: "automatic",
  },
};
