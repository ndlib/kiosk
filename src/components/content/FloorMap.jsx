import React, { Component, PropTypes } from 'react';

class FloorMap extends Component {

  constructor(props) {
    super(props);
  }

  mapID(activeFloor) {
    let floor = {}
    switch(activeFloor) {
      case 'LL':
        floor.floorName = 'Lower Level';
        floor.mapFile = 'lower.level.svg';
        break;
      case '2':
        floor.floorName = 'Second Floor';
        floor.mapFile = 'http://library.nd.edu/images/maps/2nd.floor.svg';
        break;
      case '3':
        floor.floorName = 'Third Floor';
        floor.mapFile = '3rd.floor.svg';
        break;
      case '4':
        floor.floorName = 'Fourth Floor';
        floor.mapFile = '4th.floor.svg';
        break;
      case '5':
        floor.floorName = 'Fifth Floor';
        floor.mapFile = '5th.floor.svg';
        break;
      case '6':
        floor.floorName = 'Sixth Floor';
        floor.mapFile = '6th.floor.svg';
        break;
      case '7':
        floor.floorName = 'Seventh Floor';
        floor.mapFile = '7th.floor.svg';
        break;
      case '8':
        floor.floorName = 'Eighth Floor';
        floor.mapFile = '8th.floor.svg';
        break;
      case '9':
        floor.floorName = 'Nineth Floor';
        floor.mapFile = '9th.floor.svg';
        break;
      case '10':
        floor.floorName = 'Tenth Floor';
        floor.mapFile = '10th.floor.svg';
        break;
      case '11':
        floor.floorName = 'Eleventh Floor';
        floor.mapFile = '11th.floor.svg';
        break;
      case '12':
        floor.floorName = 'Twelfth Floor';
        floor.mapFile = '12th.floor.svg';
        break;
      case '13':
        floor.floorName = 'Thirteenth Floor';
        floor.mapFile = '13th.floor.svg';
        break;
      default:
        floor.floorName = 'First Floor';
        floor.mapFile = '1st.floor.svg';
    }
    return floor;
  }

  render() {
    let floor = this.mapID(this.props.activeFloor);
    let imgSrc = "/resources/" + floor.mapFile;
    return (
      <div>
        <h1>{floor.floorName}</h1>
        <div className="floor">
          <img src={imgSrc} />
        </div>
        <div className="key">
          <img src="/resources/key.svg" />
        </div>
      </div>
    );
  }
}

FloorMap.propTypes = {
  activeFloor: PropTypes.string,
}
FloorMap.defaultProps = {
  activeFloor: null
}

export default FloorMap;
