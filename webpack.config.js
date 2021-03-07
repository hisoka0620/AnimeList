module.exports = {
  module: {
    rules: [
      {
        test: /node_modules\/vfile\/core\.js/,
        use: [{
          loader: 'imports-loader',
          options: {
            type: 'commonjs',
            imports: ['single process/browser process'],
          },
        }],
      },
    ],
  },
};
