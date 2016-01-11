
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';

import { DEFAULT, MAPS, CALL_NUMBERS, DIRECTORY, HOURS, ROOM, VISITOR } from '../../constants/AreaTypes.js'

import { Paper } from 'material-ui';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FontIcon from 'material-ui/lib/font-icon';
import setArea from '../../actions/areas.js'

class KioskMenu extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    console.log(e.target);
    return {
      actions: setArea(MAPS)
    }
  }

  render() {

    return (
      <Paper>
        <Menu>
          <MenuItem
            primaryText="Maps"
            leftIcon={(<i className="material-icons">place</i>)}
            onTouchTap={this.handleClick}
            value={MAPS}
          />
          <MenuItem
            primaryText="Call Numbers"
            leftIcon={(<i className="material-icons">local_library</i>)}
            onTouchTap={this.handleClick}
            value={CALL_NUMBERS}
          />
          <MenuItem
            primaryText="Directory"
            leftIcon={(<i className="material-icons">people</i>)}
            onTouchTap={this.handleClick}
            value={DIRECTORY}
          />
          <MenuItem
            primaryText="Hours"
            leftIcon={(<i className="material-icons">schedule</i>)}
            onTouchTap={this.handleClick}
            value={HOURS}
          />
          <MenuItem
            primaryText="Room Reservations"
            leftIcon={(<i className="material-icons">event</i>)}
            onTouchTap={this.handleClick}
            value={ROOM}
          />
          <MenuItem
            primaryText="Visitor Information"
            leftIcon={(<i className="material-icons">directions_bus</i>)}
            onTouchTap={this.handleClick}
            value={VISITOR}
          />
        </Menu>
      </Paper>
    );
  }
}

export default KioskMenu;
