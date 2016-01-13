
import React, { Component, PropTypes } from 'react';

class Hours extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
      console.log(this.props.service_points);
      return (
        <div>
          Hours
        </div>
      );
    }
}

Hours.propTypes = {
  service_points: PropTypes.object.isRequired,
}

export default Hours;
