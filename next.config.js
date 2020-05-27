// const assetPrefix = prod ? "/login" : "";

const prod = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: prod ? `${process.env.AUTH_PAGE_URL}/auth` : "",
  publicRuntimeConfig: {
    staticFolder: prod ? "/auth" : "",
  },
  env: {
    staticFolder: prod ? "/auth" : "",
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
