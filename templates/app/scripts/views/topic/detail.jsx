import React from 'react';

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.id}</h3>
  </div>
);

export default Topic;
