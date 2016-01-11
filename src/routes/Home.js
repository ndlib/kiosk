
import React, { Component, PropTypes } from 'react';

import '../assets/css/flexboxgrid.css';
import '../assets/css/font-awesome.css';
import '../assets/css/main.css';

import Row from '../components/FlexboxGrid/Row.jsx';
import Col from '../components/FlexboxGrid/Col.jsx';
import Box from '../components/FlexboxGrid/Box.jsx';

import storeManager from '../store/storeManager.js';

import { Paper } from 'material-ui';
import { CircularProgress } from 'material-ui';

import KioskMenuButton from '../components/KioskMenu/KioskMenuButton.jsx';

import { DEFAULT, MAPS, CALL_NUMBERS, DIRECTORY, HOURS, ROOM, VISITOR } from '../constants/AreaTypes.js';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeArea: DEFAULT,
    };
  }

  activeArea() {
    let area = null;

    return area;

  }
  render() {
    return (
      <div>
        <Row params={ this.props.params }>
          <div>
            Space At Top
          </div>
        </Row>
        <Row params={ this.props.params }>
          <Col params={ this.props.params }>
            <div id="target-area">
              {this.activeArea()}
            </div>
          </Col>
          <Col params={ this.props.params }>
            <div className='top-button'>
              <KioskMenuButton params={ this.props.params }>
              </KioskMenuButton>
            </div>
            <div className='bottom-button'>
              <KioskMenuButton params={ this.props.params }>
              </KioskMenuButton>
            </div>
          </Col>
        </Row>
        <Row params={ this.props.params }>
          <div>
            Space At Bottom
          </div>
        </Row>
      </div>
    );
  }
}

export default Home;
