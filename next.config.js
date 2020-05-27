// const assetPrefix = process.env.BUILDING_FOR_NOW ? "/login" : "";

module.exports = {
  assetPrefix: process.env.BUILDING_FOR_NOW ? "/auth" : "",
  publicRuntimeConfig: {
    staticFolder: process.env.BUILDING_FOR_NOW ? "/auth" : "",
  },
  env: {
    staticFolder: process.env.BUILDING_FOR_NOW ? "/auth" : "",
  },
};
