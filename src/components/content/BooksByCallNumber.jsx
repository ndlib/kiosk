import React, { Component, PropTypes } from 'react'

import { Paper } from 'material-ui';
import { List, ListItem } from 'material-ui';

class BooksByCallNumber extends Component {

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
      <div className='books-by-call-number'>
        <Paper style={this.style()}>
          <List>
            <ListItem onTouchTap={this.handleClick.bind(this,'LL')} primaryText='A' />
            <ListItem onTouchTap={this.handleClick.bind(this,'13')} primaryText='B - BR' />
            <ListItem onTouchTap={this.handleClick.bind(this,'12')} primaryText='BS - BX3999' />
            <ListItem onTouchTap={this.handleClick.bind(this,'11')} primaryText='BX4000 - DR' />
            <ListItem onTouchTap={this.handleClick.bind(this,'10')} primaryText='DS - DX' />
            <ListItem onTouchTap={this.handleClick.bind(this,'10')} primaryText='E - F' />
            <ListItem onTouchTap={this.handleClick.bind(this,'9')} primaryText='G' />
            <ListItem onTouchTap={this.handleClick.bind(this,'2')} primaryText='H - HJ' />
            <ListItem onTouchTap={this.handleClick.bind(this,'9')} primaryText='HM - HX' />
            <ListItem onTouchTap={this.handleClick.bind(this,'9')} primaryText='J - JQ' />
            <ListItem onTouchTap={this.handleClick.bind(this,'8')} primaryText='JS - JZ' />
            <ListItem onTouchTap={this.handleClick.bind(this,'8')} primaryText='K - L' />
            <ListItem onTouchTap={this.handleClick.bind(this,'2')} primaryText='M - N' />
            <ListItem onTouchTap={this.handleClick.bind(this,'8')} primaryText='P - PM' />
            <ListItem onTouchTap={this.handleClick.bind(this,'5')} primaryText='PN - PQ' />
            <ListItem onTouchTap={this.handleClick.bind(this,'4')} primaryText='PR - PZ' />
            <ListItem onTouchTap={this.handleClick.bind(this,'1')} primaryText='Q - R' />
            <ListItem onTouchTap={this.handleClick.bind(this,'LL')} primaryText='T - TQ' />
            <ListItem onTouchTap={this.handleClick.bind(this,'2')} primaryText='TR' />
            <ListItem onTouchTap={this.handleClick.bind(this,'LL')} primaryText='TS - TX' />
            <ListItem onTouchTap={this.handleClick.bind(this,'LL')} primaryText='U - Z' />
          </List>
        </Paper>
      </div>
    );
  }
}

BooksByCallNumber.propTypes = {
  onListItemClick: PropTypes.func.isRequired,
}

export default BooksByCallNumber;
