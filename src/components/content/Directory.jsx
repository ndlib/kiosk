
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
            firstName={person.first_name}
            lastName={person.last_name}
            positionTitle={person.position_title}
            location={person.contact_information.campus_address}
            phoneNumber={person.contact_information.phone_number}
            rowStyle={index % 2 == 0 ? 'row-odd' : 'row-even'}
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
        padding: '20px',
        marginBottom: '4em',
        boxSizing: 'border-box'
      }
    }

    render() {
      return (
        <div className="directory-listing directory" style={this.style()}>
          {this.people()}
        </div>
      );
    }
}

Directory.propTypes = {
  people: PropTypes.array.isRequired,
}

export default Directory;
