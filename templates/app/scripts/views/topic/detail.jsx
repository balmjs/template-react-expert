import React from 'react';

const Topic = ({ match }) => (
  <div className="page--topic topic-detail">
    <h3>{match.params.id}</h3>
  </div>
);

export default Topic;
