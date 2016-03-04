
import React, { Component, PropTypes } from 'react';

class VisitorInformation extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
      return (
        <div className="bus visitor">
          <h1>Bus Schedules</h1>  
          <img src="/resources/sweep.png" />
          <img src="/resources/midnight.png" />
        </div>
      );
    }
}

export default VisitorInformation;
