'use strict'
import React, { Component, PropTypes } from 'react';
const dayOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

class LibServicePoint extends Component {

  constructor(props) {
    super(props);
  }

  times(hours) {
    return this.groupedByKeys(hours).map(function(row, index){
      return (
        <dd style={{fontSize:'20px'}} className='time-slot' key={index}>{row.title}: {row.rendered}</dd>
      );
    });
  }

  groupedByKeys(hours) {
    let rows = []
    let startKey = dayOrder[0]
    let currentKey
    let nextKey
    for (let step = 0; step < dayOrder.length; step++) {
      currentKey = dayOrder[step]
      nextKey = dayOrder[step + 1]
      if (typeof nextKey === 'undefined' || hours[currentKey].rendered !== hours[nextKey].rendered) {
        rows.push({
          title: this.determineTitle(startKey, currentKey),
          rendered: hours[currentKey].rendered,
        })

        startKey = nextKey
      }
    }
    return rows
  }

  determineTitle(startKey, currentKey) {
    if (currentKey === startKey) {
      return currentKey
    } else {
      return startKey + ' - ' + currentKey
    }
  }

  handleClick(code, e){
    this.props.servicePointOnClick(code);
  }

  render() {
    if(this.props.hours) {
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
              dangerouslySetInnerHTML={{ __html: this.props.phone }} />
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
  code: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  hours: PropTypes.object,
  servicePointOnClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}


export default LibServicePoint;
