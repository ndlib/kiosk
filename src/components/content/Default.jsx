
import React, { Component, PropTypes } from 'react';

class Default extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
      return (
        <div className="home">
          <img src="/resources/math.tutoring.jpg" />

        </div>
      );
    }
}

export default Default;
