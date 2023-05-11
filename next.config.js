module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test   : /\.m?js$/,
      include: /node_modules/,
      type   : 'javascript/auto',
    });

    return config;
  },
};

