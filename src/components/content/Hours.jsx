
import React, { Component, PropTypes } from 'react';

import ServicePoint from './ServicePoint.jsx';

class Hours extends Component {

    constructor(props, content) {
        super(props, content);
    }

    servicePoints() {
      return this.props.servicePoints.map(function(servicePoint, index){
        return (
          <ServicePoint
            code={servicePoint.code}
            name={servicePoint.name}
            phone={servicePoint.phone}
            hours={servicePoint.regular_hours.hours}
            key={index}
          />
        );
      });
    }

    style() {
      return {
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'scroll',
      }
    }

    render() {
      console.log(this.props.servicePoints);
      return (
        <div className="hours-listing" style={this.style()}>
          {this.servicePoints()}
        </div>
      );
    }
}

Hours.propTypes = {
  servicePoints: PropTypes.array.isRequired,
}

export default Hours;
