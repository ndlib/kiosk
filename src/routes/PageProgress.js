
import React, { Component, PropTypes } from 'react';

import '../assets/css/flexboxgrid.css';
import '../assets/css/font-awesome.css';
import '../assets/css/main.css';

import Row from '../components/FlexboxGrid/Row.jsx';
import Col from '../components/FlexboxGrid/Col.jsx';
import Box from '../components/FlexboxGrid/Box.jsx';
import { Paper } from 'material-ui';
import { LinearProgress } from 'material-ui';
import { CircularProgress } from 'material-ui';
import { RefreshIndicator } from 'material-ui';
import DemoAppBar from '../components/DemoGroup/DemoAppBar.jsx';


class PageProgress extends Component {

    render() {
        return (
            <div>
                <DemoAppBar title="Click to navigate in preview mode" params={ this.props.params }></DemoAppBar>
                <div style={ {    padding: '1em'} } params={ this.props.params }>
                    <Row params={ this.props.params }>
                        <Col auto={ true } params={ this.props.params }>
                            <Box params={ this.props.params }>
                                <Paper style={ {    width: '100%'} }
                                       zDepth={ 1 }
                                       rounded={ true }
                                       params={ this.props.params }>
                                    <h3 className="text-center"
                                        style={ {    textAlign: 'center'} }
                                        params={ this.props.params }><span params={ this.props.params }>Progress indeterminated</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    padding: '1em'} } params={ this.props.params }>
                                            <LinearProgress mode="indeterminate" params={ this.props.params }></LinearProgress>
                                        </div>
                                    </div>
                                </Paper>
                            </Box>
                        </Col>
                        <Col auto={ true } params={ this.props.params }>
                            <Box params={ this.props.params }>
                                <Paper style={ {    width: '100%'} }
                                       zDepth={ 1 }
                                       rounded={ true }
                                       params={ this.props.params }>
                                    <h3 className="text-center"
                                        style={ {    textAlign: 'center'} }
                                        params={ this.props.params }><span params={ this.props.params }>Progress determinated</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    padding: '1em'} } params={ this.props.params }>
                                            <LinearProgress mode="determinate"
                                                            value={ 60 }
                                                            params={ this.props.params }></LinearProgress>
                                        </div>
                                    </div>
                                </Paper>
                            </Box>
                        </Col>
                        <Col auto={ true } params={ this.props.params }>
                            <Box params={ this.props.params }>
                                <Paper style={ {    width: '100%'} }
                                       zDepth={ 1 }
                                       rounded={ true }
                                       params={ this.props.params }>
                                    <h3 className="text-center"
                                        style={ {    textAlign: 'center'} }
                                        params={ this.props.params }><span params={ this.props.params }>Circular progress</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    padding: '1em'} } params={ this.props.params }>
                                            <CircularProgress mode="indeterminate"
                                                              size={ 1.5 }
                                                              params={ this.props.params }></CircularProgress>
                                            <CircularProgress mode="determinate"
                                                              value={ 60 }
                                                              params={ this.props.params }></CircularProgress>
                                        </div>
                                    </div>
                                </Paper>
                            </Box>
                        </Col>
                    </Row>
                </div>
                <div style={ {    padding: '1em'} } params={ this.props.params }>
                    <Row params={ this.props.params }>
                        <Col auto={ true } params={ this.props.params }>
                            <Box params={ this.props.params }>
                                <Paper style={ {    width: '100%'} }
                                       zDepth={ 1 }
                                       rounded={ true }
                                       params={ this.props.params }>
                                    <h3 className="text-center"
                                        style={ {    textAlign: 'center'} }
                                        params={ this.props.params }><span params={ this.props.params }>Refresh indicator</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    padding: '1em',    position: 'relative',    height: '50px'} } params={ this.props.params }>
                                            <RefreshIndicator percentage={ 30 }
                                                              size={ 40 }
                                                              left={ 10 }
                                                              top={ 5 }
                                                              status="ready"
                                                              params={ this.props.params }></RefreshIndicator>
                                        </div>
                                    </div>
                                </Paper>
                            </Box>
                        </Col>
                        <Col auto={ true } params={ this.props.params }>
                            <Box params={ this.props.params }>
                                <Paper style={ {    width: '100%'} }
                                       zDepth={ 1 }
                                       rounded={ true }
                                       params={ this.props.params }>
                                    <h3 className="text-center"
                                        style={ {    textAlign: 'center'} }
                                        params={ this.props.params }><span params={ this.props.params }>Loading refresh indicator</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    padding: '1em',    position: 'relative',    height: '50px'} } params={ this.props.params }>
                                            <RefreshIndicator percentage={ 30 }
                                                              size={ 40 }
                                                              left={ 10 }
                                                              top={ 5 }
                                                              status="loading"
                                                              params={ this.props.params }></RefreshIndicator>
                                        </div>
                                    </div>
                                </Paper>
                            </Box>
                        </Col>
                        <Col auto={ true } params={ this.props.params }>
                            <Box params={ this.props.params }></Box>
                        </Col>
                    </Row>
                </div>
            </div>
            );
    }
}

export default PageProgress;

