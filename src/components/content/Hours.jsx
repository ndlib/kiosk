
import React, { Component, PropTypes } from 'react';

import ServicePoint from './ServicePoint.jsx';

class Hours extends Component {

    constructor(props, content) {
        super(props, content);
        this.state = {
          activeServicePoint: null,
        }
    }

    servicePoints() {
      var hoursPage = this;
      return this.props.servicePoints.map(function(servicePoint, index){
        return (
          <ServicePoint
            code={servicePoint.code}
            name={servicePoint.name}
            phone={servicePoint.phone}
            hours={servicePoint.regular_hours.hours}
            key={index}
            servicePointOnClick={code => hoursPage.servicePointOnClick(code)}
            isOpen={hoursPage.state.activeServicePoint === servicePoint.code ? true : false}
          />
        );
      });
    }

    servicePointOnClick(code) {
      if(this.state.activeServicePoint === code) {
        this.setState({activeServicePoint: null});
      } else {
        this.setState({activeServicePoint: code});
      }

    }

    style() {
      return {
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'scroll',
      }
    }

    render() {
      return (
        <div className="hours-listing hours" style={this.style()}>
          {this.servicePoints()}
        </div>
      );
    }
}

Hours.propTypes = {
  servicePoints: PropTypes.array.isRequired,
}

export default Hours;
