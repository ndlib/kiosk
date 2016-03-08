
import React, { Component, PropTypes } from 'react';
import Tower from '../content/Tower.jsx';
import FloorMap from '../content/FloorMap.jsx';

class Maps extends Component {

    constructor(props, content) {
      super(props, content);
      this.state = {
        activeFloor: "1"
      }
    }

    onFloorClick(floorNumber) {
      console.log('MAP', floorNumber);
      this.setState({activeFloor: floorNumber});
    }

    render() {
      return (
        <div className="maps">
          <FloorMap activeFloor={this.state.activeFloor} />
          <div className="tower">
            <Tower
              activeFloor={this.state.activeFloor}
              clickable={true}
              onFloorClick={floorNumber => this.onFloorClick(floorNumber)}
              zoom="2"
            />
          </div>
        </div>
      );
    }
}

export default Maps;
