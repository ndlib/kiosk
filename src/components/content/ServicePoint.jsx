import React, { Component, PropTypes } from 'react';

class ServicePoint extends Component {

  times(hours) {
    return hours.map(function(time, index){
      return (
        <dd className='time-slot' key={index}>{time.days}: {time.hours}</dd>
      );
    });
  }

  render() {
    if(this.props.hours && this.props.hours.length > 0) {
      return (
        <div className="service-point" id={this.props.code}>
          <dt>{this.props.name}</dt>
          <dd className='phone-number'>{this.props.phone}</dd>
          {this.times(this.props.hours)}
        </div>
      );
    }
    else {
      return null;
    }
  }
}

ServicePoint.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  hours: PropTypes.array,
}


export default ServicePoint;
