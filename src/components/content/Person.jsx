import React, { Component, PropTypes } from 'react';

class Person extends Component {

  render() {
    return (
      <dl className={this.props.rowStyle}>
        <dt>{this.props.lastName}, {this.props.firstName}</dt>
        <dd>{this.props.positionTitle}</dd>
        <dd>{this.props.location}</dd>
      </dl>
    );
  }
}

Person.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  positionTitle: PropTypes.string,
  location: PropTypes.string,
  rowStyle: PropTypes.string,
}

export default Person;
