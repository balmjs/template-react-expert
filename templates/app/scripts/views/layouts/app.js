import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import routes from '../../routers/index';
import RouteWithSubRoutes from '../../routers/config';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={require('../../../images/logo.svg')} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">thx <a href="//balmjs.com/">BalmJS</a></p>

        <Router>
          <div className="container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics">Topics</Link></li>
            </ul>

            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route}/>
            ))}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
