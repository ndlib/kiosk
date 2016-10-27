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
import RoomReservations from '../components/content/RoomReservations.jsx';
import Hours from '../components/content/Hours.jsx';
import VisitorInformation from '../components/content/VisitorInformation.jsx';
import KioskMenu from '../components/KioskMenu/KioskMenu.jsx';
import ReloadTimer from '../components/ReloadTimer.jsx';

var ga = require('react-ga');
ga.initialize('UA-2118378-42');

function logPageView(selectedItem) {
  ga.pageview(selectedItem);
}

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      containerContent: DEFAULT,
      people: null,
      servicePoints: null,
    };
    this.loadHours = this.loadHours.bind(this)
    this.loadPeople = this.loadPeople.bind(this)
    this.onMenuItemClick = this.onMenuItemClick.bind(this)
  }

  contentContainer() {
    let content = (<div>EMPTY</div>);
    switch(this.state.containerContent) {
      case MAPS:
        content = (<Maps/>);
        break;
      case DIRECTORY:
        content = (<Directory people={this.state.people} />);
        break;
      case CALL_NUMBERS:
        content = (<CallNumbers/>);
        break;
      case ROOM_RESERVATIONS:
        content = (<RoomReservations/>);
        break;
      case HOURS:
        content = (<Hours servicePoints={this.state.servicePoints}/>);
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
    logPageView(selectedItem);
    this.setState({
      containerContent: selectedItem,
    });
  }

  loadHours() {
    self = this;
    $.ajax({
      context: this,
      type: 'GET',
      url: 'https://api.library.nd.edu/1.0/locations/hours.json?auth_token=hours',
      dataType: 'json',
      success: function(result){
        var servicePoints = [];
        for(var servicePoint in result.service_points){
          servicePoints.push(result.service_points[servicePoint]);
        }
        this.setState({servicePoints: servicePoints});
      },
      error: function(request, status, thrownError) {
        console.log('There was an error loading the hours data.');
      }
    });
  }

  loadPeople() {
    self = this;
    $.ajax({
      context: this,
      type: 'GET',
      url: 'https://api.library.nd.edu/1.0/people/library/all.json?auth_token=TxfhusubVZJFe91eAiPq',
      dataType: 'json',
      success: function(result){
        this.setState({people: result.people});
      },
      error: function(request, status, thrownError) {
        console.log('There was an error loading the directory data.');
      }
    });
  }

  componentWillMount() {
    this.loadHours();
    this.loadPeople();
  }

  render() {

    return (
      <div>
        <div params={ this.props.params } className='top-row'>
          <div>
            <h1>INFORMATION</h1>

          </div>
        </div>
        <Row params={ this.props.params }>
          <Col params={ this.props.params } lg={10} md={10}>
            <div id="target-area">
              {this.contentContainer()}

            </div>
          </Col>
          <Col params={ this.props.params } lg={2} md={2}>

            <div className='bottom-button'>
              <KioskMenu
              params={this.props.params}
              onMenuItemClick={selectedItem => this.onMenuItemClick(selectedItem)}
            >MENU</KioskMenu>

            </div>

          </Col>
        </Row>
        <div params={ this.props.params } className='bottom-row'>
          <div className="social">

            <p><img src="/resources/twitter.svg" /> twitter.com/ndlibraries</p>
            <p><img src="/resources/facebook.svg" /> facebook.com/hesburghlibraries</p>
            <ReloadTimer startTime={Date.now()} />

          </div>
           <img src="/resources/library.logo.svg" className="logo"/>
        </div>
      </div>
    );
  }
}

export default Home;
