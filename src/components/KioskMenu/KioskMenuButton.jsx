import React, { Component, PropTypes } from 'react';

import Row from '../FlexboxGrid/Row.jsx';
import Col from '../FlexboxGrid/Col.jsx';
import Box from '../FlexboxGrid/Box.jsx';

import { FloatingActionButton } from 'material-ui';

import KioskMenu from './KioskMenu.jsx'

class KioskMenuButton extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { menuOpen: false };
  }

  handleClick(e) {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  render() {
    var menu;
    if(this.state.menuOpen) {
      menu = (<KioskMenu params={ this.props.params }>MENU</KioskMenu>);
    }
    return (
      <Row>
        <Col>
          {menu}
        </Col>
        <Col>
          <FloatingActionButton
            params={ this.props.params }
            onTouchTap={this.handleClick}
          >
            <i className="material-icons">menu</i>
          </FloatingActionButton>
        </Col>

      </Row>
    );
  }
}

export default KioskMenuButton;
