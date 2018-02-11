import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import RouteWithSubRoutes from '../../routes/config';

class Topics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submenus: [
        {
          name: 'Rendering with React',
          url: 'rendering'
        },
        {
          name: 'Components',
          url: 'components'
        },
        {
          name: 'Props v. State',
          url: 'props-v-state'
        }
      ]
    };
  }

  render() {
    let { routes, match } = this.props;

    return (
      <div className="topic-container">
        <h2>Topics</h2>
        <ul>
          {this.state.submenus.map((menu, index) => (
            <li key={index}>
              <Link to={`${match.url}/${menu.url}`}>{menu.name}</Link>
            </li>
          ))}
        </ul>

        <Route
          exact
          path={match.url}
          render={() => (
            <div className="page--topic topic-index">
              <h3>Please select a topic.</h3>
            </div>
          )}
        />
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </div>
    );
  }
}

export default Topics;
