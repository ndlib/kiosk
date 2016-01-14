import React, { Component, PropTypes } from 'react'

import { Paper } from 'material-ui';
import { List, ListItem } from 'material-ui';

class BooksBySubject extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(activeFloor, e) {
    this.props.onListItemClick(activeFloor);
  }

  style() {
    return {
      float: 'left',
      height: '1600px',
      overflowX: 'hidden',
      overflowY: 'scroll',
      width: '40%',
    }
  }

  render() {
    return (
      <div className='books-by-subject'>
        <Paper style={this.style()}>
          <List>
            <ListItem onTouchTap={this.handleClick.bind(this, 'LL')} primaryText='Agriculture (S)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '9')} primaryText='Anthropology (GN)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '2')} primaryText='Art (N)' />
            <ListItem onTouchTap={this.handleClick.bind(this, 'LL')} primaryText='Astronomy &amp; Physics (QB - QC)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '12')} primaryText='Bible (BS)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '11')} primaryText='Biography (CT)' />
            <ListItem onTouchTap={this.handleClick.bind(this, 'LL')} primaryText='Biology (QH)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '2')} primaryText='Business (HD - HJ)' />
            <ListItem onTouchTap={this.handleClick.bind(this, 'LL')} primaryText='Chemistry (QD)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '13')} primaryText='Church History (BR)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '9')} primaryText='Communism, Socialism, Anarchism (HX)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '12')} primaryText='Denominations (BX1 - BX3999)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '11')} primaryText='Denominations (BX4000 - BX9999)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '2')} primaryText='Economics (HB - HC)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '8')} primaryText='Education (L)' />
            <ListItem onTouchTap={this.handleClick.bind(this, 'LL')} primaryText='Engeneering &amp; Technology (T - except TR)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '11')} primaryText='Geneology (CS)' />
            <ListItem onTouchTap={this.handleClick.bind(this, 'LL')} primaryText='General Works (A)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '9')} primaryText='Geography (G - F)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '11')} primaryText='History - Eastern Hemisphere (D - DR)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '10')} primaryText='History - Eastern Hemisphere (DS - DX)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '10')} primaryText='History - Western Hemisphere (E - F)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '5')} primaryText='Languages &amp; Literature (P - PM)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '8')} primaryText='Languages &amp; Literature (PN - PQ)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '8')} primaryText='Law (K)' />
            <ListItem onTouchTap={this.handleClick.bind(this, 'LL')} primaryText='Library Science &amp; Bibliography (Z)' />
            <ListItem onTouchTap={this.handleClick.bind(this, 'LL')} primaryText='Mathematics (QA)' />
            <ListItem onTouchTap={this.handleClick.bind(this, 'LL')} primaryText='Medicine (R - RZ)' />
            <ListItem onTouchTap={this.handleClick.bind(this, 'LL')} primaryText='Military Science (U - V)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '2')} primaryText='Music (M)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '13')} primaryText='Philosophy (B - BD &amp; BH - BJ)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '2')} primaryText='Photography (TR)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '9')} primaryText='Political Science (J - JQ)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '8')} primaryText='Political Science (JS - JZ)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '13')} primaryText='Psychology (BF)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '13')} primaryText='Religion (BL - BQ)' />
            <ListItem onTouchTap={this.handleClick.bind(this, 'LL')} primaryText='Science (Q)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '9')} primaryText='Social Pathology (HV)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '9')} primaryText='Sociology (HM - HT)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '9')} primaryText='Sports (GV)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '2')} primaryText='Statistics (HA)' />
            <ListItem onTouchTap={this.handleClick.bind(this, '12')} primaryText='Theology (BT - BV)' />
          </List>
        </Paper>
      </div>
    );
  }
}

BooksBySubject.propTypes = {
  onListItemClick: PropTypes.func.isRequired,
}

export default BooksBySubject;
