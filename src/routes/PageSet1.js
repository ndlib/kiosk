
import React, { Component, PropTypes } from 'react';

import '../assets/css/flexboxgrid.css';
import '../assets/css/font-awesome.css';
import '../assets/css/main.css';

import Row from '../components/FlexboxGrid/Row.jsx';
import Col from '../components/FlexboxGrid/Col.jsx';
import Box from '../components/FlexboxGrid/Box.jsx';
import { Avatar } from 'material-ui';
import { FlatButton } from 'material-ui';
import { RaisedButton } from 'material-ui';
import { FloatingActionButton } from 'material-ui';
import { DatePicker } from 'material-ui';
import { DropDownMenu } from 'material-ui';
import { FontIcon } from 'material-ui';
import { Paper } from 'material-ui';
import { Slider } from 'material-ui';
import { Checkbox } from 'material-ui';
import { RadioButtonGroup } from 'material-ui';
import { RadioButton } from 'material-ui';
import { Toggle } from 'material-ui';
import { TextField } from 'material-ui';
import { SelectField } from 'material-ui';
import { TimePicker } from 'material-ui';
import SnackbarRaisedButton from '../components/MaterialUIEnhanced/SnackbarRaisedButton.jsx';
import { Card } from 'material-ui';
import { CardHeader } from 'material-ui';
import { CardMedia } from 'material-ui';
import { CardTitle } from 'material-ui';
import { CardActions } from 'material-ui';
import { CardText } from 'material-ui';
import { List } from 'material-ui';
import { ListItem } from 'material-ui';
import { ListDivider } from 'material-ui';
import FlatButtonDialog from '../components/MaterialUIDialogs/FlatButtonDialog.jsx';
import DemoAppBar from '../components/DemoGroup/DemoAppBar.jsx';


class PageSet1 extends Component {

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
                                        params={ this.props.params }><span params={ this.props.params }>Avatars</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <Avatar src="http://lorempixel.com/output/people-q-c-150-150-9.jpg" params={ this.props.params }></Avatar>
                                        </div>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <Avatar icon={ <FontIcon className="fa fa-star" params={ this.props.params }></FontIcon> }
                                                    backgroundColor="red"
                                                    params={ this.props.params }></Avatar>
                                        </div>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <Avatar icon={ <FontIcon className="fa fa-star" params={ this.props.params }></FontIcon> }
                                                    color="#2196f3"
                                                    backgroundColor="#ffff00"
                                                    params={ this.props.params }></Avatar>
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
                                        params={ this.props.params }><span params={ this.props.params }>Flat Buttons</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <FlatButton label="Default" params={ this.props.params }></FlatButton>
                                        </div>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <FlatButton label="Primary"
                                                        primary={ true }
                                                        params={ this.props.params }></FlatButton>
                                        </div>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <FlatButton label="Secondary"
                                                        secondary={ true }
                                                        params={ this.props.params }></FlatButton>
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
                                        params={ this.props.params }><span params={ this.props.params }>Raised Buttons</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <RaisedButton label="Default" params={ this.props.params }></RaisedButton>
                                        </div>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <RaisedButton label="Default"
                                                          primary={ true }
                                                          disabled={ false }
                                                          params={ this.props.params }></RaisedButton>
                                        </div>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <RaisedButton label="Link"
                                                          secondary={ true }
                                                          linkButton={ true }
                                                          params={ this.props.params }></RaisedButton>
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
                                        params={ this.props.params }><span params={ this.props.params }>Floating Action Buttons</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <FloatingActionButton iconClassName="fa fa-star" params={ this.props.params }></FloatingActionButton>
                                        </div>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <FloatingActionButton iconClassName="fa fa-star"
                                                                  secondary={ true }
                                                                  mini={ true }
                                                                  params={ this.props.params }></FloatingActionButton>
                                        </div>
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
                                        params={ this.props.params }><span params={ this.props.params }>List</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <List params={ this.props.params }>
                                            <ListItem primaryText="Inbox"
                                                      leftIcon={ <FontIcon className="fa fa-inbox" params={ this.props.params }></FontIcon> }
                                                      params={ this.props.params }></ListItem>
                                            <ListItem primaryText="Inbox"
                                                      rightIcon={ <FontIcon className="fa fa-info-circle" params={ this.props.params }></FontIcon> }
                                                      params={ this.props.params }></ListItem>
                                            <ListItem primaryText="Brendan Lim"
                                                      leftAvatar={ <Avatar src="http://lorempixel.com/output/people-q-c-150-150-9.jpg" params={ this.props.params }></Avatar> }
                                                      params={ this.props.params }></ListItem>
                                            <ListDivider params={ this.props.params }></ListDivider>
                                            <ListItem primaryText="Brendan Lim"
                                                      secondaryText="Jan 28, 2014"
                                                      leftAvatar={ <Avatar icon={ <FontIcon className="fa fa-folder" params={ this.props.params }></FontIcon> }
                                                                           backgroundColor="red"
                                                                           params={ this.props.params }></Avatar> }
                                                      rightIcon={ <FontIcon className="fa fa-info-circle" params={ this.props.params }></FontIcon> }
                                                      params={ this.props.params }></ListItem>
                                            <ListDivider inset={ true } params={ this.props.params }></ListDivider>
                                            <ListItem primaryText="Brendan Lim"
                                                      secondaryText={ <p params={ this.props.params }>
                                                                          <span params={ this.props.params }>I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</span>
                                                                      </p> }
                                                      secondaryTextLines={ 2 }
                                                      rightIcon={ <FontIcon className="fa fa-info-circle" params={ this.props.params }></FontIcon> }
                                                      insetChildren={ true }
                                                      params={ this.props.params }></ListItem>
                                            <ListDivider inset={ true } params={ this.props.params }></ListDivider>
                                            <ListItem primaryText="Brendan Lim"
                                                      secondaryText="Jan 28, 2014"
                                                      rightIcon={ <FontIcon className="fa fa-info-circle" params={ this.props.params }></FontIcon> }
                                                      insetChildren={ true }
                                                      params={ this.props.params }></ListItem>
                                        </List>
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
                                        params={ this.props.params }><span params={ this.props.params }>List</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <List subheader="Checkboxes" params={ this.props.params }>
                                            <ListItem primaryText="Inbox"
                                                      secondaryText="Empty"
                                                      leftCheckbox={ <Checkbox params={ this.props.params }></Checkbox> }
                                                      rightIcon={ <FontIcon className="fa fa-inbox" params={ this.props.params }></FontIcon> }
                                                      params={ this.props.params }></ListItem>
                                            <ListItem primaryText="Inbox"
                                                      rightIcon={ <FontIcon className="fa fa-info-circle" params={ this.props.params }></FontIcon> }
                                                      params={ this.props.params }></ListItem>
                                            <ListItem primaryText="Brendan Lim"
                                                      leftCheckbox={ <Checkbox params={ this.props.params }></Checkbox> }
                                                      rightAvatar={ <Avatar src="http://lorempixel.com/output/people-q-c-150-150-9.jpg" params={ this.props.params }></Avatar> }
                                                      params={ this.props.params }></ListItem>
                                            <ListItem primaryText="Brendan Lim"
                                                      secondaryText="Jan 28, 2014"
                                                      rightAvatar={ <Avatar icon={ <FontIcon className="fa fa-folder" params={ this.props.params }></FontIcon> }
                                                                            backgroundColor="red"
                                                                            params={ this.props.params }></Avatar> }
                                                      leftCheckbox={ <Checkbox params={ this.props.params }></Checkbox> }
                                                      params={ this.props.params }></ListItem>
                                        </List>
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
                                        params={ this.props.params }><span params={ this.props.params }>List</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <List subheader="Toggles" params={ this.props.params }>
                                            <ListItem primaryText="Inbox"
                                                      secondaryText="Empty"
                                                      rightToggle={ <Toggle defaultToggled={ true } params={ this.props.params }></Toggle> }
                                                      leftIcon={ <FontIcon className="fa fa-inbox" params={ this.props.params }></FontIcon> }
                                                      params={ this.props.params }></ListItem>
                                            <ListItem primaryText="Inbox"
                                                      rightIcon={ <FontIcon className="fa fa-info-circle" params={ this.props.params }></FontIcon> }
                                                      params={ this.props.params }></ListItem>
                                            <ListItem primaryText="Brendan Lim"
                                                      rightToggle={ <Toggle params={ this.props.params }></Toggle> }
                                                      leftAvatar={ <Avatar src="http://lorempixel.com/output/people-q-c-150-150-9.jpg" params={ this.props.params }></Avatar> }
                                                      params={ this.props.params }></ListItem>
                                            <ListItem primaryText="Brendan Lim"
                                                      secondaryText="Jan 28, 2014"
                                                      leftAvatar={ <Avatar icon={ <FontIcon className="fa fa-folder" params={ this.props.params }></FontIcon> }
                                                                           backgroundColor="red"
                                                                           params={ this.props.params }></Avatar> }
                                                      rightToggle={ <Toggle params={ this.props.params }></Toggle> }
                                                      params={ this.props.params }></ListItem>
                                        </List>
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
                                        params={ this.props.params }><span params={ this.props.params }>Slider</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    padding: '0'} } params={ this.props.params }>
                                            <Slider params={ this.props.params }></Slider>
                                        </div>
                                        <div style={ {    padding: '0'} } params={ this.props.params }>
                                            <Slider name="slider"
                                                    defaultValue={ 0.5 }
                                                    step={ 0.1 }
                                                    value={ 0.3 }
                                                    params={ this.props.params }></Slider>
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
                                        params={ this.props.params }><span params={ this.props.params }>Radio Buttons</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <RadioButtonGroup name="shipSpeed"
                                                          defaultSelected="not_light"
                                                          params={ this.props.params }>
                                            <RadioButton label="prepare for light speed"
                                                         style={ {    marginBottom: '16px'} }
                                                         disabled={ false }
                                                         value="light"
                                                         params={ this.props.params }></RadioButton>
                                            <RadioButton label="light speed too slow"
                                                         style={ {    marginBottom: '16px'} }
                                                         disabled={ false }
                                                         value="not_light"
                                                         params={ this.props.params }></RadioButton>
                                            <RadioButton label="go to ludicrous speed"
                                                         style={ {    marginBottom: '16px'} }
                                                         disabled={ false }
                                                         value="ludicrous"
                                                         params={ this.props.params }></RadioButton>
                                        </RadioButtonGroup>
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
                                        params={ this.props.params }><span params={ this.props.params }>Toggles</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    padding: '1em'} } params={ this.props.params }>
                                            <Toggle name="toggleName1"
                                                    value="toggleValue1"
                                                    label="initiate self-destruct sequence"
                                                    disabled={ false }
                                                    defaultToggled={ false }
                                                    params={ this.props.params }></Toggle>
                                        </div>
                                        <div style={ {    padding: '1em'} } params={ this.props.params }>
                                            <Toggle name="toggleName1"
                                                    value="toggleValue1"
                                                    label="initiate self-destruct sequence"
                                                    disabled={ false }
                                                    defaultToggled={ true }
                                                    params={ this.props.params }></Toggle>
                                        </div>
                                        <div style={ {    padding: '1em'} } params={ this.props.params }>
                                            <Toggle name="toggleName1"
                                                    value="toggleValue1"
                                                    label="initiate self-destruct sequence"
                                                    disabled={ true }
                                                    defaultToggled={ false }
                                                    params={ this.props.params }></Toggle>
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
                                        params={ this.props.params }><span params={ this.props.params }>Checkboxes</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    padding: '1em'} } params={ this.props.params }>
                                            <Checkbox name="checkboxName1"
                                                      value="checkboxValue1"
                                                      label="went for a run today"
                                                      defaultChecked={ false }
                                                      disabled={ false }
                                                      params={ this.props.params }></Checkbox>
                                        </div>
                                        <div style={ {    padding: '1em'} } params={ this.props.params }>
                                            <Checkbox name="checkboxName1"
                                                      value="checkboxValue1"
                                                      label="went for a run today"
                                                      defaultChecked={ true }
                                                      disabled={ false }
                                                      params={ this.props.params }></Checkbox>
                                        </div>
                                        <div style={ {    padding: '1em'} } params={ this.props.params }>
                                            <Checkbox name="checkboxName1"
                                                      value="checkboxValue1"
                                                      label="went for a run today"
                                                      defaultChecked={ false }
                                                      disabled={ true }
                                                      params={ this.props.params }></Checkbox>
                                        </div>
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
                                        params={ this.props.params }><span params={ this.props.params }>Snackbar Button</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <SnackbarRaisedButton params={ this.props.params }></SnackbarRaisedButton>
                                    </div>
                                </Paper>
                                <Paper style={ {    width: '100%'} }
                                       zDepth={ 1 }
                                       rounded={ true }
                                       params={ this.props.params }>
                                    <h3 className="text-center"
                                        style={ {    textAlign: 'center'} }
                                        params={ this.props.params }><span params={ this.props.params }>Timepicker</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <TimePicker format="24hr"
                                                    hintText="24hr Format"
                                                    params={ this.props.params }></TimePicker>
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
                                        params={ this.props.params }><span params={ this.props.params }>Text Fields</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <TextField hintText="Hint text" params={ this.props.params }></TextField>
                                        <TextField hintText="Hint text"
                                                   errorText="Error text can be long, very long, very very long, very very long"
                                                   params={ this.props.params }></TextField>
                                        <TextField hintText="Hint text (MultiLine)"
                                                   multiLine={ true }
                                                   params={ this.props.params }></TextField>
                                        <TextField hintText="Hint text"
                                                   defaultValue="Default Value"
                                                   params={ this.props.params }></TextField>
                                        <TextField hintText="Hint text"
                                                   defaultValue="Default Value"
                                                   underlineStyle={ {    borderColor: '#4caf50'} }
                                                   params={ this.props.params }></TextField>
                                        <TextField hintText="Hint text"
                                                   defaultValue="Default Value"
                                                   underlineFocusStyle={ {    borderColor: '#ff6f00'} }
                                                   params={ this.props.params }></TextField>
                                        <TextField hintText="Hint text"
                                                   floatingLabelText="Floating Label Text"
                                                   defaultValue="Default Value"
                                                   errorText="This field is required"
                                                   params={ this.props.params }></TextField>
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
                                        params={ this.props.params }><span params={ this.props.params }>Select Field</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <SelectField menuItems={ [{    payload: '1',    text: 'Never'}, {    payload: '2',    text: 'Every Night'}, {    payload: '3',    text: 'Weeknights'}, {    payload: '4',    text: 'Weekends'}, {    payload: '5',    text: 'Weekly'}] }
                                                     items={ ['qweqeqwe', 1232423, false] }
                                                     params={ this.props.params }></SelectField>
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
                                        params={ this.props.params }><span params={ this.props.params }>Date Picker</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <DatePicker hintText="Portrait Dialog" params={ this.props.params }></DatePicker>
                                        </div>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <DatePicker hintText="Landscape Dialog"
                                                        mode="landscape"
                                                        params={ this.props.params }></DatePicker>
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
                                        params={ this.props.params }><span params={ this.props.params }>Dialog button</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <FlatButtonDialog params={ this.props.params }></FlatButtonDialog>
                                        </div>
                                    </div>
                                </Paper>
                                <Paper style={ {    width: '100%'} }
                                       zDepth={ 1 }
                                       rounded={ true }
                                       params={ this.props.params }>
                                    <h3 className="text-center"
                                        style={ {    textAlign: 'center'} }
                                        params={ this.props.params }><span params={ this.props.params }>Timepicker</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <TimePicker format="24hr"
                                                    hintText="24hr Format"
                                                    params={ this.props.params }></TimePicker>
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
                                        params={ this.props.params }><span params={ this.props.params }>Dropdown Menu</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <DropDownMenu menuItems={ [{    payload: '1',    text: 'Never'}, {    payload: '2',    text: 'Every Night'}, {    payload: '3',    text: 'Weeknights'}, {    payload: '4',    text: 'Weekends'}, {    payload: '5',    text: 'Weekly'}] } params={ this.props.params }></DropDownMenu>
                                        </div>
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
                                        params={ this.props.params }><span params={ this.props.params }>Card</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <div style={ {    display: 'block',    padding: '0.5em'} } params={ this.props.params }>
                                            <Card params={ this.props.params }>
                                                <CardHeader title="Title"
                                                            subtitle="Subtitle"
                                                            avatar={ <Avatar color="#f5f5f5" params={ this.props.params }>
                                                                         <span params={ this.props.params }>A</span>
                                                                     </Avatar> }
                                                            params={ this.props.params }></CardHeader>
                                                <CardHeader title="Title"
                                                            subtitle="Subtitle"
                                                            avatar="http://lorempixel.com/100/100/nature/"
                                                            params={ this.props.params }></CardHeader>
                                                <CardMedia overlay={ <CardTitle title="Title"
                                                                                subtitle="Subtitle"
                                                                                params={ this.props.params }></CardTitle> } params={ this.props.params }>
                                                    <img src="http://lorempixel.com/600/337/nature/" params={ this.props.params }></img>
                                                </CardMedia>
                                                <CardTitle title="Title"
                                                           subtitle="Subtitle"
                                                           params={ this.props.params }></CardTitle>
                                                <CardActions params={ this.props.params }>
                                                    <FlatButton label="Action 1" params={ this.props.params }></FlatButton>
                                                    <FlatButton label="Action 2" params={ this.props.params }></FlatButton>
                                                </CardActions>
                                                <CardText expandable={ false } params={ this.props.params }>
                                                    <span params={ this.props.params }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</span>
                                                </CardText>
                                            </Card>
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
                                        params={ this.props.params }><span params={ this.props.params }>Collapsible Card</span></h3>
                                    <div style={ {    padding: '1em'} } params={ this.props.params }>
                                        <Card initiallyExpanded={ true } params={ this.props.params }>
                                            <CardHeader title="Title"
                                                        subtitle="Subtitle"
                                                        avatar={ <Avatar params={ this.props.params }>
                                                                     <span params={ this.props.params }>A</span>
                                                                 </Avatar> }
                                                        showExpandableButton={ true }
                                                        params={ this.props.params }></CardHeader>
                                            <CardText expandable={ true } params={ this.props.params }>
                                                <span params={ this.props.params }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</span>
                                            </CardText>
                                            <CardActions expandable={ true } params={ this.props.params }>
                                                <FlatButton label="Action 1" params={ this.props.params }></FlatButton>
                                                <FlatButton label="Action 2" params={ this.props.params }></FlatButton>
                                            </CardActions>
                                            <CardText expandable={ true } params={ this.props.params }>
                                                <span params={ this.props.params }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</span>
                                            </CardText>
                                        </Card>
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

export default PageSet1;

