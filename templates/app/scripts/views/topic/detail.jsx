import React from 'react';
import PropTypes from 'prop-types';

const Topic = ({ match }) => (
  <div className="page--topic topic-detail">
    <h3>{match.params.id}</h3>
  </div>
);

Topic.propTypes = {
  match: PropTypes.object
};

export default Topic;
