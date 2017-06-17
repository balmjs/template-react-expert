import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import axios from 'axios';

class Menu extends Component {
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
      <nav>
        <ul className="site-menu">
          {this.state.menus.map((menu, index) =>
            <li key={index}>
              <Link to={menu.url}>{menu.name}</Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Menu;
