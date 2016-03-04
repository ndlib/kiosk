
import React, { Component, PropTypes } from 'react';

import { RaisedButton } from 'material-ui';
import { Paper } from 'material-ui';
import { List, ListItem } from 'material-ui';

import BooksBySubject from './BooksBySubject.jsx';
import BooksByCallNumber from './BooksByCallNumber.jsx';
import Tower from './Tower.jsx';

const SUBJECT = 'subject';
const NUMBER = 'number';

class CallNumbers extends Component {

    constructor(props, content) {
      super(props, content);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        activeSort: SUBJECT,
        activeFloor: null,
      }
    }

    handleClick(sortType, e) {
      this.setState({
        activeSort: sortType,
        activeFloor: null,
      });
    }

    handleListClick(activeFloor) {
      this.setState({activeFloor: activeFloor});
    }

    style() {
      return {
        float: 'right',
        height: '1600px',
        width: '60%',
      }
    }

    displayListing() {
      if(this.state.activeSort == SUBJECT) {
        return (
          <BooksBySubject
            params={this.props.params}
            onListItemClick={activeFloor => this.handleListClick(activeFloor)}
          />
        );
      }
      else if(this.state.activeSort == NUMBER) {
        return (
          <BooksByCallNumber
            params={this.props.params}
            onListItemClick={activeFloor => this.handleListClick(activeFloor)}
          />
        );
      }
      else {
        return null
      }

    }

    callNumberButtons() {
      return (
        <div
          className='call-number-buttons'
          style={{margin: '20px', textAlign: 'center'}}
        >
          <RaisedButton
            id='books-by-subject-button'
            label='Books by Subject'
            onTouchTap={this.handleClick.bind(this, SUBJECT)}
            secondary={this.state.activeSort == SUBJECT ? true : false}
          />
          <RaisedButton
            id='books-by-number-button'
            label='Books by Call #'
            onTouchTap={this.handleClick.bind(this, NUMBER)}
            secondary={this.state.activeSort == NUMBER ? true : false}
          />
        </div>
      );
    }

    render() {
      return (
        <div className='call-numbers call'>
          {this.displayListing()}
          <Paper style={this.style()}>
            {this.callNumberButtons()}
            <Tower activeFloor={this.state.activeFloor}/>
            {this.callNumberButtons()}
          </Paper>
        </div>
      );
    }
}

export default CallNumbers;
