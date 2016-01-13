import React, { Component, PropTypes } from 'react';

import { RaisedButton } from 'material-ui';

class RoomReservations extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(roomID, e) {
    console.log(e);
    jQuery("#room" + roomID).LibCalRoomBooking({ "iid": 3037, "gid": roomID,  "width": 1080, "height": 1920 });
  }

  render() {
    return (
      <div className='room-reservations'>
        <ul>
          <li>
            <RaisedButton
              id='room11262'
              label='CDS Sound Studio'
              onTouchTap={this.handleClick.bind(this, '11262')}
            />
          </li>
          <li>
            <RaisedButton
              id='room10771'
              label='Center for Digital Scholarship Rooms'
              onTouchTap={this.handleClick.bind(this, '10771')}
            />
          </li>
          <li>
            <RaisedButton
              id='room10784'
              label='Hesburgh Library 2nd Floor Group Study Rooms'
              onTouchTap={this.handleClick.bind(this, '10784')}
            />
          </li>
          <li>
            <RaisedButton
              id='room10772'
              label='One Button Studio'
              onTouchTap={this.handleClick.bind(this, '10772')}
            />
          </li>
        </ul>
      </div>
    );
  }

}

export default RoomReservations;
