// const assetPrefix = prod ? "/login" : "";

const prod = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: prod ? `` : "",
  publicRuntimeConfig: {
    staticFolder: prod ? "" : "",
  },
  env: {
    staticFolder: prod ? "" : "",
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/_next": { page: prod ? "/_next" : "/" },
      "/_next/**": { page: prod ? "/_next/**" : "/" },
    };
  },
};
