'use strict'
import React, { Component, PropTypes } from 'react';

import '../assets/css/flexboxgrid.css';
import '../assets/css/font-awesome.css';
import '../assets/css/main.css';

import Row from '../components/FlexboxGrid/Row.jsx';
import Col from '../components/FlexboxGrid/Col.jsx';
import Box from '../components/FlexboxGrid/Box.jsx';

import storeManager from '../store/storeManager.js';
import { setContainerContent, DEFAULT, MAPS, DIRECTORY, CALL_NUMBERS, ROOM_RESERVATIONS, HOURS, VISITOR_INFO } from '../actions/MenuActions.js'
let store = storeManager();


import { Paper } from 'material-ui';
import { CircularProgress } from 'material-ui';

import Default from '../components/content/Default.jsx';
import Maps from '../components/content/Maps.jsx';
import Directory from '../components/content/Directory.jsx';
import CallNumbers from '../components/content/CallNumbers.jsx';
import Hours from '../components/content/Hours.jsx';
import VisitorInformation from '../components/content/VisitorInformation.jsx';
import KioskMenuButton from '../components/KioskMenu/KioskMenuButton.jsx';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      containerContent: store.getState().containerContent,
    }
  }

  contentContainer() {
    console.log("CONTENT CONTAINTER CALLED");
    let content = (<div>EMPTY</div>);
    switch(this.state.containerContent) {
      case MAPS:
        content = (<Maps/>);
        break;
      case DIRECTORY:
        content = (<Directory/>);
        break;
      case CALL_NUMBERS:
        content = (<CallNumbers/>);
        break;
      case ROOM_RESERVATIONS:
        content = (<div>ROOM_RESERVATIONS</div>);
        break;
      case HOURS:
        content = (<Hours/>);
        break;
      case VISITOR_INFO:
        content = (<VisitorInformation/>);
        break;
      default:
        content = (<Default/>);
    }
    return content;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('test', this.state.containerContent,  store.getState().containerContent);
    return this.state.containerContent !== store.getState().containerContent;
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
              {this.contentContainer()}
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
