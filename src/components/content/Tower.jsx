import React, { Component, PropTypes} from 'react';

import { Avatar } from 'material-ui';
import { Styles } from 'material-ui';
import { List, ListItem } from 'material-ui';
import { Paper } from 'material-ui';

class Tower extends Component {

  constructor(props) {
    super(props);
  }

  activeStyle() {
    return {
      backgroundColor: 'yellow'
    }
  }

  defaultStyle() {
    return {

    }
  }

  floor(floorNumber, floorText) {
    return (
      <ListItem
        style={this.props.activeFloor == floorNumber ? this.activeStyle() : this.defaultStyle()}
        leftAvatar={
          <Avatar
            color='#333333'
            backgroundColor={Styles.Colors.transparent}
            style={{left: 8}}>{floorNumber}</Avatar>
        }
        primaryText={floorText}
        disabled={true}
      />
    );
  }

  render() {
    return (
      <Paper>
        <List>
          {this.floor('13', 'Thirteenth Floor')}
          {this.floor('12', 'Twelfth Floor')}
          {this.floor('11', 'Eleventh Floor')}
          {this.floor('10', 'Tenth Floor')}
          {this.floor('9', 'Ninth Floor')}
          {this.floor('8', 'Eighth Floor')}
          {this.floor('7', 'Seventh Floor')}
          {this.floor('6', 'Notre Dame Archives')}
          {this.floor('5', 'Fifth Floor')}
          {this.floor('4', 'Fourth Floor')}
          {this.floor('3', 'Maintenance Floor')}
          {this.floor('2', 'Second Floor')}
          {this.floor('1', 'First Floor')}
          {this.floor('LL', 'Lower Level')}
        </List>
      </Paper>
    );
  }

}

Tower.propTypes = {
  activeFloor: PropTypes.string,
}
Tower.defaultProps = {
  activeFloor: null,
}

export default Tower;
