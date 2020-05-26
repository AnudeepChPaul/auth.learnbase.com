// const assetPrefix = process.env.BUILDING_FOR_NOW ? "/login" : "";

module.exports = {
  env: {
    AUTH_SUCCESS_URL: "https://google.com",
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/login" }
    };
  },
};
