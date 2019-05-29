import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { MDBInput, MDBCol, MDBRow, MDBBtn } from 'mdbreact';
import api from '../api';

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
        urlImage: '',
        localImage: '',
        color: '',
        carouselItems: [],
    };

    componentDidMount() {
        api.get('/api/carousel',
            (res) => {
                this.setState({
                    carouselItems: res,
                });
            }
        );
    };

    removeCarousel = event => {
        const id = event.target.getAttribute('data-id');
        api.delete(`/api/carousel/${id}`);
        this.setState({
            carouselItems: this.state.carouselItems.filter(item => item._id !== id)
        });
    };

    handleChange = event => {
        let stateTarget = event.target.getAttribute("data-target");
        this.setState({ [stateTarget]: event.target.value });
    };

    handleLocalImage = event => {
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        let fileName = event.target.value;

        reader.onload = (e) => {
            this.setState({
                localImage: e.target.result,
                fileName: fileName,
            })
        }
    }

    handleTabChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    handleSubmit = () => {
        //NEED TO ADD VALIDATION
        api.post('/api/carousel', this.state)
        this.setState({
            description: '',
            urlImage: '',
            localImage: '',
            color: '',
        });
        this.props.onAdd()
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
                                    accept="image/*"
                                    className={classes.input}
                                    data-target={'image'}
                                    id="contained-button-file"
                                    type="file"
                                    onChange={this.handleLocalImage}
                                />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput label="#Color" value={this.state.color} data-target={'color'} onChange={this.handleChange} className="d-inline-block" outline />
                            </MDBCol>
                        </MDBRow>
                        <MDBInput label="Image URL:" value={this.state.urlImage} data-target={'urlImage'} onChange={this.handleChange} className="d-inline-block" outline />
                        <MDBBtn onClick={this.handleSubmit} color="light-green">Add Item</MDBBtn>

                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <div>
                            {this.state.carouselItems.map(item => {
                                // console.log(item)
                                function imageName() {
                                    if (item.fileName) {
                                        return item.fileName.slice(0, 45) + "...";
                                    } else {
                                        return item.image.slice(0, 45) + "...";
                                    }
                                }
                                return (
                                    <div className="remCar" key={item._id}>
                                        {imageName()}
                                        <button>copy</button>
                                        <span onClick={this.removeCarousel} data-id={item._id}>x</span>
                                    </div>
                                )
                            })}
                        </div>
                    </TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AdminCarousel);