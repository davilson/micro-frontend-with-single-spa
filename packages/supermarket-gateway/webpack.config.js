const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "foxkey",
    projectName: "gateway",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["react-router-dom"],
  });
};
