import React, { Component, PropTypes } from 'react'

class ReloadTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsed: 0,
    };
  }

  componentDidMount() {
    let start = this.props.startTime;
    this.timer = setInterval(this.tick.bind(this, start), 1000);
    console.log(start, this.state.elapsed, Date.now());
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  tick(start) {
    // reload window every 10 minutes
    if(this.state.elapsed > (1000 * 60 * 10)) {
      location.reload();
    }
    this.setState({elapsed: Date.now() - start});

    console.log(Date.now() - start);
  }

  render() {
    return (
      <div style={{display:'none'}} ></div>
    );
  }
}

ReloadTimer.propTypes = {
  startTime: PropTypes.number.isRequired,
}

export default ReloadTimer;
