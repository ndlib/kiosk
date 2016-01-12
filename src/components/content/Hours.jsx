
import React, { Component, PropTypes } from 'react';

class Default extends Component {

    constructor(props, content) {
        super(props, content);
        this.state = { data: null }
    }

    loadHours() {
      $.ajax({
        context: this,
        type: 'GET',
        url: 'https://api.library.nd.edu/1.0/locations/hours.json?auth_token=hours',
        dataType: 'json',
        success: function(result){
          this.setState({data: result});
        },
        error: function(request, status, thrownError) {
          console.log('There was an error.');
        }
      });
    }
    componentWillMount() {
      this.loadHours();
    }

    render() {
      let hours = 'formatted hours go here';
      return (
        <div>
          <h1>Hours of Opperation</h1>
          {hours}
        </div>
      );
    }
}

export default Default;
