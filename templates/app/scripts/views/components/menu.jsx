import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import axios from 'axios';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: []
    };
  }

  componentDidMount() {
    this.getMenu();
  }

  async getMenu() {
    if (!this.state.menu.length) {
      let response = await axios.get('/data/menu.json');
      let { code, message, data } = response.data;
      if (code === 200) {
        let menu = data;
        this.setState({ menu });
      } else {
        alert(message);
      }
    }
  }

  render() {
    return (
      <nav>
        <ul className="site-menu">
          {this.state.menu.map((item, index) => (
            <li key={index}>
              <Link to={item.url} replace>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Menu;
