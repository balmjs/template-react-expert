import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../../routes/index';
import RouteWithSubRoutes from '../../routes/config';
import MyMenu from '../components/menu';
import Home from '../home';
import logo from '../../../images/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">thx <a href="//balmjs.com/">BalmJS</a></p>
        <hr />
        <Router>
          <div className="container">
            <MyMenu />
            <Switch>
              <Route exact path="/" component={Home} />
              {routes.map((route, index) => (
                <RouteWithSubRoutes key={index} {...route} />
              ))}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
