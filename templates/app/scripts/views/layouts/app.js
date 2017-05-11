import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink as Link, Route } from 'react-router-dom';
import axios from 'axios';
import routes from '../../routers/index';
import RouteWithSubRoutes from '../../routers/config';
import Home from '../home';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: []
    };
  }

  async componentDidMount() {
    if (!this.state.menus.length) {
      let response = await axios.get('/data/menu.json');
      let menus = response.data;
      this.setState({ menus });
    }
  }

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
              {this.state.menus.map((menu, index) =>
                <li key={index}>
                  <Link to={menu.url}>{menu.name}</Link>
                </li>
              )}
            </ul>

            <Route exact path="/" component={Home}/>
            {routes.map((route, index) => (
              <RouteWithSubRoutes key={index} {...route}/>
            ))}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
