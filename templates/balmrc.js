module.exports = {
  proxyTable: {
    '/api': {
      target: 'http://your.project.dev',
      changeOrigin: true
    }
  },
  entry: {
    react: ['react', 'react-dom', 'react-router-dom'],
    main: './app/scripts/main.js' // entry js file
  },
  vendors: ['react'],
  assets: {
    root: 'assets', // replace 'assets' to your remote project root
    publicPath: 'public'
  },
  publish: {
    'index.html': {
      target: 'views', // replace 'views' to your remote project views path
      option: {
        basename: 'index',
        extname: '.php'
      }
    }
  }
};
