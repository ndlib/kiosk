import React, { Component, PropTypes } from 'react';

class Person extends Component {

  render() {
    return (
      <dl className={this.props.rowStyle} style={{margin:'0px 0', float:'left', width:'100%', padding:'10px', boxSizing: 'border-box'}}>
        <dt style={{fontSize:'30px', clear:'both', marginBottom:'10px'}}>{this.props.lastName}, {this.props.firstName}</dt>
        <dd style={{fontSize:'20px', float:'left', width:'50%', marginLeft:'2%'}}>{this.props.positionTitle}</dd>
        <dd style={{fontSize:'20px', float:'right', marginRight:'20%', marginLeft:'0', width:'25%'}}>{this.props.location}</dd>
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
