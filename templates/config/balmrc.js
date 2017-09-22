module.exports = {
  server: {
    open: true,
    proxyTable: {
      '/api': {
        target: 'http://your.project.dev',
        changeOrigin: true
      }
    }
  },
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'scripts',
      img: 'images'
    }
  },
  styles: {
    ext: 'scss',
    autoprefixer: [
      '> 1%',
      'last 2 versions',
      'not ie < 9'
    ]
  },
  scripts: {
    entry: {
      lib: ['react', 'react-dom', 'react-router-dom', 'axios'],
      main: './app/scripts/main.jsx' // Entry js file
    }
  },
  cache: true,
  assets: {
    root: 'assets', // Replace 'assets' to your remote project root
    publicPath: 'public'
  }
  // More Config
  // https://github.com/balmjs/balm/blob/master/docs/configuration.md
};
