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
        floor.mapFile = 'http://library.nd.edu/images/maps/0th.floor.svg';
        break;
      case '2':
        floor.floorName = 'Second Floor';
        floor.mapFile = 'http://library.nd.edu/images/maps/2nd.floor.svg';
        break;
      case '3':
        floor.floorName = 'Third Floor';
        floor.mapFile = '/resources/3rd.floor.svg';
        break;
      case '4':
        floor.floorName = 'Fourth Floor';
        floor.mapFile = 'http://library.nd.edu/images/maps/4th.floor.svg';
        break;
      case '5':
        floor.floorName = 'Fifth Floor';
        floor.mapFile = '/resources/5th.floor.svg';
        break;
      case '6':
        floor.floorName = 'Sixth Floor';
        floor.mapFile = '/resources/6th.floor.svg';
        break;
      case '7':
        floor.floorName = 'Seventh Floor';
        floor.mapFile = '/resources/7th.floor.svg';
        break;
      case '8':
        floor.floorName = 'Eighth Floor';
        floor.mapFile = 'http://library.nd.edu/images/maps/8th.floor.svg';
        break;
      case '9':
        floor.floorName = 'Nineth Floor';
        floor.mapFile = '/resources/9th.floor.svg';
        break;
      case '10':
        floor.floorName = 'Tenth Floor';
        floor.mapFile = 'http://library.nd.edu/images/maps/10th.floor.svg';
        break;
      case '11':
        floor.floorName = 'Eleventh Floor';
        floor.mapFile = '/resources/11th.floor.svg';
        break;
      case '12':
        floor.floorName = 'Twelfth Floor';
        floor.mapFile = '/resources/12th.floor.svg';
        break;
      case '13':
        floor.floorName = 'Thirteenth Floor';
        floor.mapFile = '/resources/13th.floor.svg';
        break;
      default:
        floor.floorName = 'First Floor';
        floor.mapFile = '/resources/1st.floor.svg';
    }
    return floor;
  }

  render() {
    let floor = this.mapID(this.props.activeFloor);
    let imgSrc = "" + floor.mapFile;
    return (
      <div>
        <h1>{floor.floorName}</h1>
        <div className="floor">
          <img src={imgSrc} />
        </div>
        <div className="key">
          <img src="http://library.nd.edu/images/maps/key.svg" />
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
