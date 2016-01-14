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
        secondaryText={floorText}
        disabled={true}
      />
    );
  }

  render() {
    return (
      <Paper>
        <List>
          {this.floor('13', 'stuff')}
          {this.floor('12', 'stuff')}
          {this.floor('11', 'stuff')}
          {this.floor('10', 'stuff')}
          {this.floor('9', 'stuff')}
          {this.floor('8', 'stuff')}
          {this.floor('7', 'stuff')}
          {this.floor('6', 'stuff')}
          {this.floor('5', 'stuff')}
          {this.floor('4', 'stuff')}
          {this.floor('3', 'stuff')}
          {this.floor('2', 'stuff')}
          {this.floor('1', 'stuff')}
          {this.floor('LL', 'stuff')}
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
