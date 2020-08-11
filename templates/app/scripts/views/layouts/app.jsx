import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '@/routes';
import RouteWithSubRoutes from '@/routes/config';
import MyMenu from '@/views/components/menu';
import Home from '@/views/home';
import logo from '@/assets/logo.svg';

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p>
        thx <a href="//balm.js.org/">BalmJS</a>
      </p>
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

export default App;
