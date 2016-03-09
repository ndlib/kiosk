'use strict'
import React, { Component, PropTypes } from 'react';

class LibServicePoint extends Component {

  constructor(props) {
    super(props);
  }

  times(hours) {
    return hours.map(function(time, index){
      return (
        <dd style={{fontSize:'20px'}} className='time-slot' key={index}>{time.days}: {time.hours}</dd>
      );
    });
  }

  handleClick(code, e){
    this.props.servicePointOnClick(code);
  }

  render() {
    if(this.props.hours && this.props.hours.length > 0) {
      return (
        <div
          className="service-point panel panel-default"
          id={this.props.code}
          onTouchTap={this.handleClick.bind(this, this.props.code)}
        >
          <dt
            className="panel-heading"
            style={{
              fontSize:'26px',
              fontWeight:'bold',
              marginBottom:'10px'}}
          >{this.props.name}</dt>
          <div style={{display: this.props.isOpen ? 'block' : 'none'}}>
            <dd
              className="panel-body phone-number"
              style={{fontSize:'20px'}}
            >{this.props.phone}</dd>
            {this.times(this.props.hours)}
          </div>
        </div>
      );
    }
    else {
      return null;
    }
  }
}

LibServicePoint.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  hours: PropTypes.array,
  servicePointOnClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}


export default LibServicePoint;
