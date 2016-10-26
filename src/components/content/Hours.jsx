
import React, { Component, PropTypes } from 'react';
import { CircularProgress } from 'material-ui'
import LibServicePoint from './LibServicePoint.jsx';

class Hours extends Component {

    constructor(props, content) {
        super(props, content);
        this.state = {
          activeLibServicePoint: null,
        }
    }

    servicePoints() {
      var hoursPage = this;
      if(this.props.servicePoints) {
        return this.props.servicePoints.map(function(servicePoint, index){
          return (
            <LibServicePoint
              code={servicePoint.code}
              name={servicePoint.name}
              phone={servicePoint.phone}
              hours={servicePoint.regular_hours.hours}
              key={index}
              servicePointOnClick={code => hoursPage.servicePointOnClick(code)}
              isOpen={hoursPage.state.activeLibServicePoint === servicePoint.code ? true : false}
            />
          );
        });
      }
      return ( <CircularProgress />)
    }

    servicePointOnClick(code) {
      if(this.state.activeLibServicePoint === code) {
        this.setState({activeLibServicePoint: null});
      } else {
        this.setState({activeLibServicePoint: code});
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
