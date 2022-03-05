module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Lillian-Sight-Words/' : '/Lillian-Sight-Words/',
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV === "development",
      }      
    },
  },
};
