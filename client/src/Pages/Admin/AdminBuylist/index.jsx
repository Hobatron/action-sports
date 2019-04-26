import React, { Component } from 'react'
import { MDBRow, MDBInput, MDBCol, MDBInputSelect, MDBBtn } from 'mdbreact';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';

function TabContainer(props) {
    const { children, dir } = props;

    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: 'relative',
        minHeight: 200,
    }
});

export class AdminBuylist extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    render() {
        const { classes, theme } = this.props;

        return (

            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Add Carousel" />
                        <Tab label="Remove Carousel" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                    >
                    <TabContainer dir={theme.direction}>
                        <MDBRow className="pl-5 pr-5 pt-4">
                            <div>
                                <span className="font-weight-bold">Add to Buylist</span>
                                <div className="pl-3 pr-3 border">
                                    <MDBRow>
                                        <MDBCol>
                                            <MDBInput label="Card Name" className="d-inline-block" outline />
                                        </MDBCol>
                                        <MDBCol className="mt-3">
                                            <FormControlLabel className=""
                                                control={<Checkbox
                                                    onChange={this.handleSetChange('set')}
                                                    value="repeat"
                                                    label="Male"
                                                />}
                                                label="All sets"
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol>
                                            Paying
                                            <MDBInputSelect
                                                precision={2}
                                                value={10}
                                                step={0.25}
                                                className="mb-2"
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBBtn color="light-green">Add card</MDBBtn>
                                </div>
                            </div>
                        </MDBRow>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>Item Two</TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AdminBuylist);

