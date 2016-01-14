
import React, { Component, PropTypes } from 'react';

class Maps extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
      return (
        <div className="maps">
          <h1>10th Floor</h1>
          <div className="floor">
            <img src="/resources/10th.floor.svg" />
          </div>
          <div className="key">
            <img src="/resources/key.svg" />
          </div>
          <div className="tower">
            <img src="/resources/tower.svg" />
          </div>
        </div>
      );
    }
}

export default Maps;
