import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import RouteWithSubRoutes from '@/routes/config';

function Topics({ routes, match }) {
  let [submenu] = useState([
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
  ]);

  return (
    <div className="topic-container">
      <h2>Topics</h2>
      <ul>
        {submenu.map((menu, index) => (
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

export default Topics;
