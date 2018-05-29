// Documentation - http://balmjs.com/docs/en/configuration/toc.html
// 中文文档 - http://balmjs.com/docs/zh-cn/configuration/toc.html
module.exports = {
  server: {
    open: true,
    proxyContext: '/api',
    proxyOptions: {
      target: 'http://your.project.dev', // Target host
      changeOrigin: true // Needed for virtual hosted sites
    }
  },
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'scripts'
    }
  },
  styles: {
    ext: 'scss',
    autoprefixer: ['> 1%', 'last 2 versions', 'not ie < 9']
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
};
