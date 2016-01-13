import React, { Component, PropTypes } from 'react';

class Person extends Component {

  render() {
    return (
      <dl className={this.props.rowStyle}>
        <dt>{this.props.fullName}</dt>
        <dd>{this.props.positionTitle}</dd>
        <dd>{this.props.location}</dd>
      </dl>
    );
  }
}

Person.propTypes = {
  fullName: PropTypes.string.isRequired,
  positionTitle: PropTypes.string,
  location: PropTypes.sting,
  rowStyle: PropTypes.string,
}

export default Person;
