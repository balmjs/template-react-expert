/* eslint-env node */
const path = require('path');

// Documentation - http://balmjs.com/docs/v2/config/
// 中文文档 - https://balmjs.com/docs/v2/zh/config/
module.exports = {
  server: {
    // proxyConfig: {
    //   context: '/api',
    //   options: {
    //     target: 'http://your.project.dev', // Target host
    //     changeOrigin: true // Needed for virtual hosted sites
    //   }
    // }
  },
  roots: {
    source: 'app'
  },
  styles: {
    extname: 'scss'
  },
  scripts: {
    entry: {
      lib: ['react', 'react-dom', 'react-router-dom', 'axios'],
      main: './app/scripts/main.jsx' // Entry js file
    },
    alias: {
      '@': path.resolve(__dirname, '..', 'app', 'scripts')
    }
  },
  assets: {
    root: 'assets', // Replace 'assets' to your remote project root
    mainDir: 'public',
    cache: true
  }
  // More Config
};
