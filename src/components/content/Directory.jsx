
import React, { Component, PropTypes } from 'react';
import Person from './Person.jsx'
class Directory extends Component {

    constructor(props, content) {
        super(props, content);
    }

    people() {
      return this.props.people.map(function(person, index){
        return (
          <Person
            fullName={person.full_name}
            positionTitle={person.position_title}
            location={person.contact_information.campus_address}
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
      return (
        <div style={this.style()}>
          {this.people()}
        </div>
      );
    }
}

Directory.propTypes = {
  people: PropTypes.array.isRequired,
}

export default Directory;
