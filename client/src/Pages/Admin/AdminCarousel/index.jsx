import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { MDBInput, MDBCol, MDBRow, MDBBtn } from 'mdbreact';
import axios from '../api';

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

class AdminCarousel extends React.Component {
    state = {
        value: 0,
        description: '',
        image: '',
    };

    handleChange = event => {
        console.log(event.target.value)
        let stateTarget = event.target.getAttribute("data-target");
        this.setState({ [stateTarget]: event.target.value });
    }

    handleTabChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    handleSubmit = () => {
        //NEED TO ADD VALIDATION
        axios.post('/api/carousel', this.state)
        this.setState({
            description: '',
            image: '',
        })
    };

    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleTabChange}
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
                        <MDBInput type="textarea" value={this.state.description} data-target={'description'} onChange={this.handleChange} label="Details" outline />
                        <MDBRow>
                            <MDBCol>
                                <span className="muted">to be added</span>
                                <input
                                    disabled
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    type="file"
                                // onChange={this.handleChange}
                                />
                            </MDBCol>
                            <MDBCol>
                                <MDBBtn onClick={this.handleSubmit} color="light-green">Add Item</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        <MDBInput label="Image URL:" value={this.state.image} data-target={'image'} onChange={this.handleChange} className="d-inline-block" outline />
                    </TabContainer>
                    <TabContainer dir={theme.direction}>Item Two</TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AdminCarousel);