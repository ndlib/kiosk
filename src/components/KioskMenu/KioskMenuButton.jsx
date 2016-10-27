import React, { Component, PropTypes } from 'react';

import Row from '../FlexboxGrid/Row.jsx';
import Col from '../FlexboxGrid/Col.jsx';
import Box from '../FlexboxGrid/Box.jsx';

import { FloatingActionButton } from 'material-ui';

import KioskMenu from './KioskMenu.jsx'

class KioskMenuButton extends Component {




  render() {

    return (
      <Row>
        <Col>
          <KioskMenu
          params={this.props.params}
          onMenuItemClick={this.props.onMenuItemClick}
        >MENU</KioskMenu>
        </Col>


      </Row>
    );
  }
}
KioskMenuButton.propTypes = {
  onMenuItemClick: PropTypes.func.isRequired,
  onMenuButtonClick: PropTypes.func.isRequired,
 //menuOpen: PropTypes.bool.isRequired,
}

export default KioskMenuButton;
