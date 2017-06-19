import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import routes from '../../routers/index';
import RouteWithSubRoutes from '../../routers/config';
import MyMenu from '../components/menu';
import Home from '../home';

class App extends Component {
  constructor(props) {
    super(props);

    this.logo = require('../../../images/logo.svg');
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={this.logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">thx <a href="//balmjs.com/">BalmJS</a></p>
        <hr />
        <Router>
          <div className="container">
            <MyMenu />
            <Route exact path="/" component={Home} />
            {routes.map((route, index) => (
              <RouteWithSubRoutes key={index} {...route} />
            ))}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
