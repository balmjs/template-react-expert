import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import API from '../../api';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: []
    };
  }

  async componentDidMount() {
    if (!this.state.menu.length) {
      let menu = await API.getMenu();
      this.setState({ menu });
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
