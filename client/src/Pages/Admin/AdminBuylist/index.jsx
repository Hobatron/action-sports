import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBInputSelect, MDBBtn } from 'mdbreact';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MTGAuto from '../../../components/MTGAutoComplete';
import api from "../api";

function TabContainer(props) {
    const { children, dir } = props;

    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
};

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
        cardQ: '',
        searchResults: [],
        disabled: true,
        price: 0,
        quantity: 0,
        name: '',
        image: '',
        buylist: [],
    };

    handleSubmit = () => {
        const { name, image, price, quantity } = this.state
        const data = {
            name: name,
            image: image,
            price: price,
            quantity: quantity
        };

        api.post("/api/buylist", data)
        this.setState({
            value: 0,
            cardQ: '',
            searchResults: [],
            disabled: true,
            price: 0,
            quantity: 0,
            name: '',
            image: '',
        });
        this.props.onAdd();
    };

    componentDidMount() {
        api.get("/api/buylist", (buylist) => {
            this.setState({
                buylist: buylist
            })
        })
    };

    handleTabChange = (event, value) => {
        this.setState({ value });
    };

    handlePrice = value => this.setState({ price: value });
    handleQuant = value => this.setState({ quantity: value });

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    cardPicked = cardDetails => {
        this.setState({
            disabled: false,
            price: cardDetails.price,
            name: cardDetails.name,
            image: cardDetails.image,
        });
    };

    removeCard = event => {
        const id = event.target.getAttribute('data-id');
        api.delete(`/api/buylist/${id}`);
        this.setState({
            buylist: this.state.buylist.filter(item => item._id !== id)
        });
    }

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
                        <Tab label="Add to Buylist" />
                        <Tab label="Remove From Buylist" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <MDBRow>
                            <MDBCol>
                                <MTGAuto return={this.cardPicked} />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol>
                                <FormControl>
                                    <InputLabel shrink htmlFor="select-multiple-native">
                                        Select Sets:
                                    </InputLabel>
                                    <Select
                                        disabled//={this.state.disabled}
                                        native
                                        value={this.state.eventType}
                                        onChange={this.handleChange}
                                    >
                                        {/* {this.state.catagories.map(name => {
                                            return (
                                                <option key={name} value={name}>
                                                    {name}
                                                </option>
                                            )
                                        })} */}
                                    </Select>
                                </FormControl>
                            </MDBCol>
                            <MDBCol>
                                <FormControl>
                                    <InputLabel shrink htmlFor="select-multiple-native">
                                        Currently selected sets:
                                    </InputLabel>
                                    <TextField disabled>
                                    </TextField>
                                </FormControl>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol>
                                Paying
                                <MDBInputSelect
                                    disabled={this.state.disabled}
                                    precision={2}
                                    getValue={this.handlePrice}
                                    value={this.state.price}
                                    step={0.25}
                                    className="mb-2"
                                />
                            </MDBCol>
                        </MDBRow>
                        Quantity
                        <MDBInputSelect
                            disabled={this.state.disabled}
                            precision={0}
                            getValue={this.handleQuant}
                            value={this.state.quantity}
                            step={1}
                            className="mb-2"
                        />
                        <MDBBtn onClick={this.handleSubmit} color="light-green">Add card</MDBBtn>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <MDBRow>
                            {this.state.buylist.map(card => {
                                return (
                                    <div className="remCar" key={card._id}>
                                        {card.name}
                                        <span onClick={this.removeCard} data-id={card._id}>x</span>
                                    </div>
                                )
                            })}
                        </MDBRow>
                    </TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AdminBuylist);

