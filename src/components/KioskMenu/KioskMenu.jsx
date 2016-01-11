
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';

import { Paper } from 'material-ui';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FontIcon from 'material-ui/lib/font-icon';

import storeManager from '../../store/storeManager.js';
import { setContainerContent, DEFAULT, MAPS, DIRECTORY, CALL_NUMBERS, ROOM_RESERVATIONS, HOURS, VISITOR_INFO } from '../../actions/MenuActions.js'
const store = storeManager();

class KioskMenu extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(target, e){
    e.preventDefault();
    e.stopPropagation();
    store.dispatch(setContainerContent(target));
    // console.log(store.getState());
    return {
    }
  }

  render() {

    return (
      <Paper>
        <Menu>
          <MenuItem
            primaryText="Maps"
            leftIcon={(<i className="material-icons">place</i>)}
            onTouchTap={this.handleClick.bind(this, MAPS)}
          />
          <MenuItem
            primaryText="Call Numbers"
            leftIcon={(<i className="material-icons">local_library</i>)}
            onTouchTap={this.handleClick.bind(this, CALL_NUMBERS)}

          />
          <MenuItem
            primaryText="Directory"
            leftIcon={(<i className="material-icons">people</i>)}
            onTouchTap={this.handleClick.bind(this, DIRECTORY)}

          />
          <MenuItem
            primaryText="Hours"
            leftIcon={(<i className="material-icons">schedule</i>)}
            onTouchTap={this.handleClick.bind(this, HOURS)}

          />
          <MenuItem
            primaryText="Room Reservations"
            leftIcon={(<i className="material-icons">event</i>)}
            onTouchTap={this.handleClick.bind(this, ROOM_RESERVATIONS)}

          />
          <MenuItem
            primaryText="Visitor Information"
            leftIcon={(<i className="material-icons">directions_bus</i>)}
            onTouchTap={this.handleClick.bind(this, VISITOR_INFO)}

          />
        </Menu>
      </Paper>
    );
  }
}

export default KioskMenu;
