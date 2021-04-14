module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.module
      .rule("raw")
      .test(/\.ttl$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  },
  publicPath: "/Intuitive-Design-for-Knowledge-Graph-Mappings/",
};
