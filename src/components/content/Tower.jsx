import React, { Component, PropTypes} from 'react';

import { Avatar } from 'material-ui';
import { Styles } from 'material-ui';
import { List, ListItem } from 'material-ui';
import { Paper } from 'material-ui';

class Tower extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(floor, e) {
    console.log("clicked:", floor);
    if(this.props.onFloorClick) {
      this.props.onFloorClick(floor);
    }
  }

  activeStyle() {
    return {
      backgroundColor: '#B18D03'
    }
  }

  defaultStyle(floorNumber) {
    if(floorNumber == 'LL') {
      floorNumber = '0';
    }
    return {
      backgroundColor: parseInt(floorNumber) % 2 == 0 ? '#9aa4b3' : '#a9b2be'
    }
  }

  floor(floorNumber, floorText) {
    return (
      <ListItem
        style={this.props.activeFloor == floorNumber ? this.activeStyle() : this.defaultStyle(floorNumber)}
        leftAvatar={
          <Avatar
            color='#333333'
            backgroundColor={Styles.Colors.transparent}
            style={{left: 8}}>{floorNumber}</Avatar>
        }
        primaryText={floorText}
        disabled={!this.props.clickable}
        onTouchTap={this.handleClick.bind(floorNumber)}
      />
    );
  }

  render() {
    return (
      <div style={{zoom: this.props.zoom}}>
        <div style={{ position: 'relative', width: '100%'}}>
          <div style={{margin: '20px 115px'}}>
          <Paper
            style={{
              backgroundColor: '#9aa4b3',
              height: '60px',
              width: '300px',
              marginLeft: '25px',
            }}
            zDepth={0}
          ></Paper>
            <Paper
              style={{width: '350px'}}
              zDepth={0}
            >
              <Paper
                style={{
                  backgroundColor: '#5d6e85',
                  bottom: '0',
                  height: '759px',
                  marginLeft: '-50px',
                  position: 'absolute',
                  width: '450px',
                }}
                zDepth={0}
              ></Paper>
              <Paper
                style={{
                  backgroundColor: '#434f5f',
                  bottom: '0',
                  height: '168px',
                  marginLeft: '-100px',
                  position: 'absolute',
                  width: '550px',
                }}
                zDepth={0}
              ></Paper>
              <Paper
                style={{
                  backgroundColor: '#515151',
                  bottom: '0',
                  height: '56px',
                  marginLeft: '-100px',
                  position: 'absolute',
                  width: '550px',
                }}
                zDepth={0}
              ></Paper>
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
            </Paper>

          </div>
        </div>
      </div>
    );
  }

}

Tower.propTypes = {
  activeFloor: PropTypes.string,
  clickable: PropTypes.bool,
  onFloorClick: PropTypes.func,
  zoom: PropTypes.string
}
Tower.defaultProps = {
  activeFloor: null,
  clickable: false,
  onFloorClick: null,
  zoom: '1.0',
}

export default Tower;
