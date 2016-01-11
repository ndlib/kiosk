
import React, { Component, PropTypes } from 'react';

import '../assets/css/flexboxgrid.css';
import '../assets/css/font-awesome.css';
import '../assets/css/main.css';

import Row from '../components/FlexboxGrid/Row.jsx';
import Col from '../components/FlexboxGrid/Col.jsx';
import Box from '../components/FlexboxGrid/Box.jsx';
import { AppBar } from 'material-ui';
import { FlatButton } from 'material-ui';
import { FontIcon } from 'material-ui';
import { SvgIcon } from 'material-ui';
import { IconButton } from 'material-ui';
import { Paper } from 'material-ui';
import { Tabs } from 'material-ui';
import { Tab } from 'material-ui';
import IconMenuX from '../components/MaterialUIEnhanced/IconMenuX.jsx';
import LeftNavIconButton from '../components/MaterialUIEnhanced/LeftNavIconButton.jsx';
import TableX from '../components/MaterialUITable/TableX.jsx';
import DemoAppBar from '../components/DemoGroup/DemoAppBar.jsx';


class PageSet2 extends Component {

    render() {
        return (
            <div>
                <DemoAppBar title="Click to navigate in preview mode" params={ this.props.params }></DemoAppBar>
                <div style={ {    padding: '1em'} } params={ this.props.params }></div>
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
                                        params={ this.props.params }><span params={ this.props.params }>Table</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <TableX fixedHeader={ true }
                                                fixedFooter={ true }
                                                stripedRows={ false }
                                                showRowHover={ false }
                                                selectable={ true }
                                                multiSelectable={ true }
                                                enableSelectAll={ true }
                                                deselectOnClickaway={ true }
                                                height="300px"
                                                params={ this.props.params }></TableX>
                                    </div>
                                </Paper>
                            </Box>
                        </Col>
                    </Row>
                    <Row params={ this.props.params }>
                        <Col auto={ true } params={ this.props.params }>
                            <Box params={ this.props.params }>
                                <Paper style={ {    width: '100%'} }
                                       zDepth={ 1 }
                                       rounded={ true }
                                       params={ this.props.params }>
                                    <h3 className="text-center"
                                        style={ {    textAlign: 'center'} }
                                        params={ this.props.params }><span params={ this.props.params }>Tabs</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <Tabs params={ this.props.params }>
                                            <Tab label="Tab One" params={ this.props.params }>
                                                <div style={ {    padding: '1em'} } params={ this.props.params }>
                                                    <Row params={ this.props.params }>
                                                        <Col auto={ true } params={ this.props.params }>
                                                            <Box params={ this.props.params }>
                                                                <Paper style={ {    width: '100%',    height: '100px'} }
                                                                       zDepth={ 1 }
                                                                       rounded={ true }
                                                                       params={ this.props.params }>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>zDepth: 1</span>
                                                                    </p>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>rounded: true</span>
                                                                    </p>
                                                                </Paper>
                                                            </Box>
                                                        </Col>
                                                        <Col auto={ true } params={ this.props.params }>
                                                            <Box params={ this.props.params }>
                                                                <Paper style={ {    width: '100%',    height: '100px'} }
                                                                       zDepth={ 1 }
                                                                       rounded={ true }
                                                                       params={ this.props.params }>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>zDepth: 1</span>
                                                                    </p>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>rounded: true</span>
                                                                    </p>
                                                                </Paper>
                                                            </Box>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Tab>
                                            <Tab label="Tab Two" params={ this.props.params }>
                                                <div style={ {    padding: '1em'} } params={ this.props.params }>
                                                    <Row params={ this.props.params }>
                                                        <Col auto={ true } params={ this.props.params }>
                                                            <Box params={ this.props.params }>
                                                                <Paper style={ {    width: '100%',    height: '100px'} }
                                                                       zDepth={ 1 }
                                                                       rounded={ true }
                                                                       params={ this.props.params }>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>zDepth: 1</span>
                                                                    </p>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>rounded: true</span>
                                                                    </p>
                                                                </Paper>
                                                            </Box>
                                                        </Col>
                                                        <Col auto={ true } params={ this.props.params }>
                                                            <Box params={ this.props.params }>
                                                                <Paper style={ {    width: '100%',    height: '100px'} }
                                                                       zDepth={ 1 }
                                                                       rounded={ true }
                                                                       params={ this.props.params }>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>zDepth: 1</span>
                                                                    </p>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>rounded: true</span>
                                                                    </p>
                                                                </Paper>
                                                            </Box>
                                                        </Col>
                                                        <Col auto={ true } params={ this.props.params }>
                                                            <Box params={ this.props.params }>
                                                                <Paper style={ {    width: '100%',    height: '100px'} }
                                                                       zDepth={ 1 }
                                                                       rounded={ true }
                                                                       params={ this.props.params }>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>zDepth: 1</span>
                                                                    </p>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>rounded: true</span>
                                                                    </p>
                                                                </Paper>
                                                            </Box>
                                                        </Col>
                                                        <Col auto={ true } params={ this.props.params }>
                                                            <Box params={ this.props.params }>
                                                                <Paper style={ {    width: '100%',    height: '100px'} }
                                                                       zDepth={ 1 }
                                                                       rounded={ true }
                                                                       params={ this.props.params }>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>zDepth: 1</span>
                                                                    </p>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>rounded: true</span>
                                                                    </p>
                                                                </Paper>
                                                            </Box>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Tab>
                                            <Tab label="Tab Three" params={ this.props.params }>
                                                <div style={ {    padding: '1em'} } params={ this.props.params }>
                                                    <Row params={ this.props.params }>
                                                        <Col auto={ true } params={ this.props.params }>
                                                            <Box params={ this.props.params }>
                                                                <Paper style={ {    width: '100%',    height: '100px'} }
                                                                       zDepth={ 1 }
                                                                       rounded={ true }
                                                                       params={ this.props.params }>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>zDepth: 1</span>
                                                                    </p>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>rounded: true</span>
                                                                    </p>
                                                                </Paper>
                                                            </Box>
                                                        </Col>
                                                        <Col auto={ true } params={ this.props.params }>
                                                            <Box params={ this.props.params }>
                                                                <Paper style={ {    width: '100%',    height: '100px'} }
                                                                       zDepth={ 1 }
                                                                       rounded={ true }
                                                                       params={ this.props.params }>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>zDepth: 1</span>
                                                                    </p>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>rounded: true</span>
                                                                    </p>
                                                                </Paper>
                                                            </Box>
                                                        </Col>
                                                        <Col auto={ true } params={ this.props.params }>
                                                            <Box params={ this.props.params }>
                                                                <Paper style={ {    width: '100%',    height: '100px'} }
                                                                       zDepth={ 1 }
                                                                       rounded={ true }
                                                                       params={ this.props.params }>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>zDepth: 1</span>
                                                                    </p>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>rounded: true</span>
                                                                    </p>
                                                                </Paper>
                                                            </Box>
                                                        </Col>
                                                        <Col auto={ true } params={ this.props.params }>
                                                            <Box params={ this.props.params }>
                                                                <Paper style={ {    width: '100%',    height: '100px'} }
                                                                       zDepth={ 1 }
                                                                       rounded={ true }
                                                                       params={ this.props.params }>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>zDepth: 1</span>
                                                                    </p>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>rounded: true</span>
                                                                    </p>
                                                                </Paper>
                                                            </Box>
                                                        </Col>
                                                        <Col auto={ true } params={ this.props.params }>
                                                            <Box params={ this.props.params }>
                                                                <Paper style={ {    width: '100%',    height: '100px'} }
                                                                       zDepth={ 1 }
                                                                       rounded={ true }
                                                                       params={ this.props.params }>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>zDepth: 1</span>
                                                                    </p>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>rounded: true</span>
                                                                    </p>
                                                                </Paper>
                                                            </Box>
                                                        </Col>
                                                        <Col auto={ true } params={ this.props.params }>
                                                            <Box params={ this.props.params }>
                                                                <Paper style={ {    width: '100%',    height: '100px'} }
                                                                       zDepth={ 1 }
                                                                       rounded={ true }
                                                                       params={ this.props.params }>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>zDepth: 1</span>
                                                                    </p>
                                                                    <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                                        <span params={ this.props.params }>rounded: true</span>
                                                                    </p>
                                                                </Paper>
                                                            </Box>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </Paper>
                            </Box>
                        </Col>
                    </Row>
                    <Row params={ this.props.params }>
                        <Col auto={ true } params={ this.props.params }>
                            <Box params={ this.props.params }>
                                <Paper style={ {    width: '100%'} }
                                       zDepth={ 1 }
                                       rounded={ true }
                                       params={ this.props.params }>
                                    <h3 className="text-center"
                                        style={ {    textAlign: 'center'} }
                                        params={ this.props.params }><span params={ this.props.params }>Icon menu</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <IconMenuX menuItems={ [{    primaryText: 'Refresh'}, {    primaryText: 'Send feedback'}, {    primaryText: 'Settings'}, {    primaryText: 'Help'}, {    primaryText: 'Sign out'}] }
                                                       openDirection="bottom-right"
                                                       params={ this.props.params }></IconMenuX>
                                        </div>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <IconMenuX menuItems={ [{    primaryText: 'Refresh'}, {    primaryText: 'Send feedback'}, {    primaryText: 'Settings'}, {    primaryText: 'Help'}, {    primaryText: 'Sign out'}] }
                                                       openDirection="top-right"
                                                       params={ this.props.params }></IconMenuX>
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
                                        params={ this.props.params }><span params={ this.props.params }>Icons</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <FontIcon className="fa fa-home"
                                                      color="#0077dd"
                                                      params={ this.props.params }></FontIcon>
                                        </div>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <FontIcon className="fa fa-home"
                                                      color="green"
                                                      hoverColor="red"
                                                      params={ this.props.params }></FontIcon>
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
                                        params={ this.props.params }><span params={ this.props.params }>SVG icon</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <SvgIcon params={ this.props.params }>
                                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" params={ this.props.params }></path>
                                            </SvgIcon>
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
                                        params={ this.props.params }><span params={ this.props.params }>Icon button</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <IconButton iconClassName="fa fa-star"
                                                        tooltip="Star...."
                                                        disabled={ false }
                                                        tooltipPosition="bottom-center"
                                                        params={ this.props.params }></IconButton>
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
                                        params={ this.props.params }><span params={ this.props.params }>Left Nav</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <LeftNavIconButton params={ this.props.params }></LeftNavIconButton>
                                        </div>
                                    </div>
                                </Paper>
                            </Box>
                        </Col>
                        <Col auto={ true } params={ this.props.params }>
                            <Box params={ this.props.params }></Box>
                        </Col>
                        <Col auto={ true } params={ this.props.params }>
                            <Box params={ this.props.params }></Box>
                        </Col>
                        <Col auto={ true } params={ this.props.params }>
                            <Box params={ this.props.params }></Box>
                        </Col>
                    </Row>
                    <Row params={ this.props.params }>
                        <Col auto={ true } params={ this.props.params }>
                            <Box params={ this.props.params }>
                                <Paper style={ {    width: '100%'} }
                                       zDepth={ 1 }
                                       rounded={ true }
                                       params={ this.props.params }>
                                    <h3 className="text-center"
                                        style={ {    textAlign: 'center'} }
                                        params={ this.props.params }><span params={ this.props.params }>Paper</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <Paper style={ {    width: '100px',    height: '100px'} } params={ this.props.params }>
                                            <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                <span params={ this.props.params }>Default</span>
                                            </p>
                                        </Paper>
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
                                        params={ this.props.params }><span params={ this.props.params }>Paper</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <Paper style={ {    width: '100px',    height: '100px'} }
                                               zDepth={ 4 }
                                               params={ this.props.params }>
                                            <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                <span params={ this.props.params }>zDepth: 4</span>
                                            </p>
                                        </Paper>
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
                                        params={ this.props.params }><span params={ this.props.params }>Paper</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <Paper style={ {    width: '100px',    height: '100px'} }
                                               circle={ true }
                                               params={ this.props.params }>
                                            <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                <span params={ this.props.params }>Default</span>
                                            </p>
                                            <p style={ {    textAlign: 'center'} } params={ this.props.params }>
                                                <span params={ this.props.params }>circle: true</span>
                                            </p>
                                        </Paper>
                                    </div>
                                </Paper>
                            </Box>
                        </Col>
                    </Row>
                    <Row params={ this.props.params }>
                        <Col auto={ true } params={ this.props.params }>
                            <Box params={ this.props.params }>
                                <Paper style={ {    width: '100%'} }
                                       zDepth={ 1 }
                                       rounded={ true }
                                       params={ this.props.params }>
                                    <h3 className="text-center"
                                        style={ {    textAlign: 'center'} }
                                        params={ this.props.params }><span params={ this.props.params }>AppBar</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <AppBar title="Brand"
                                                iconElementRight={ <FlatButton label="Save" params={ this.props.params }></FlatButton> }
                                                params={ this.props.params }></AppBar>
                                    </div>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <AppBar iconClassNameRight="fa fa-chevron-down"
                                                title="Brand"
                                                iconElementLeft={ <IconButton iconClassName="fa fa-times" params={ this.props.params }></IconButton> }
                                                params={ this.props.params }></AppBar>
                                    </div>
                                </Paper>
                            </Box>
                        </Col>
                    </Row>
                </div>
            </div>
            );
    }
}

export default PageSet2;

