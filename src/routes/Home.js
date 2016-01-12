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
    this.state = {containerContent: DEFAULT};
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

  onMenuItemClick(selectedItem){
    console.log('selectedItem', selectedItem);
    this.setState({containerContent: selectedItem});
  }

  render() {

    return (
      <div>
        <Row params={ this.props.params } className='top-row'>
          <div>
            <img src="/resources/library.logo.svg" className="logo"/>
          </div>
        </Row>
        <Row params={ this.props.params }>
          <Col params={ this.props.params }>
            <div id="target-area">
              {this.contentContainer()}
              <img src="/resources/math.tutoring.jpg" />
            </div>
          </Col>
          <Col params={ this.props.params }>
            <div className='top-button'>
              <KioskMenuButton
                params={ this.props.params }
                onMenuItemClick={selectedItem => this.onMenuItemClick(selectedItem)}
              >
              </KioskMenuButton>
            </div>
            <div className='bottom-button'>
              <KioskMenuButton
                params={ this.props.params }
                onMenuItemClick={selectedItem => this.onMenuItemClick(selectedItem)}
              >
              </KioskMenuButton>
            </div>
          </Col>
        </Row>
        <Row params={ this.props.params } className='bottom-row'>
          <div>
            Space At Bottom
          </div>
        </Row>
      </div>
    );
  }
}

export default Home;
