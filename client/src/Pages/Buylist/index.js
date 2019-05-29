import React, { Component } from 'react';
import './Buylist.css';
import api from "./api";
import Card from '../../components/Card';
import CustomSnackbar from '../../components/Snackbar';
import Snackbar from '@material-ui/core/Snackbar';
import MTGAutoComplete from '../../components/MTGAutoComplete';
import { MDBBtn, MDBRow, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact'

function genFile(forSaleListObj) {
    const obj = forSaleListObj;
    let txt = "\nDownloaded via actionsports.com\r\n"
        + "****ALL PRICES ARE SUBJECT TO CHANGE****"
        + "\r\n\r\nQnt:\tEach:\tCard:\r\n\r\n"

    let totalCards = 0;
    let totalValue = 0;
    obj.forEach((card) => {
        totalCards += parseInt(card.quantity);
        totalValue += card.total;
        let tabs = "";
        //adds tabs between card.name and card.total to align them with total. Can't support card names longer than 66chars
        for (let i = card.name.length; i < 32; i += 8) {
            tabs += "\t"
        };
        txt += `\nx${card.quantity}\t$${card.per.toFixed(2)}\t${card.name}${tabs}$${card.total.toFixed(2)}\r\n`
    });
    txt += `\r\n\nTotal cards: ${totalCards} \t\t\t\tTotal:\t$${totalValue.toFixed(2)}`

    return txt
}

class Buylist extends Component {
    state = {
        cardName: "",
        buylist: [],
        currentView: [],
        toSell: [],
        modal: false,
        snackOpen: false,
        snackVariant: "success",
        snackText: "",
    };

    componentDidMount() {
        api.get((res) => {
            this.setState({
                buylist: res,
                currentView: res,
            })
        });
    };

    onSell = newItems => {
        let updateToSell = this.state.toSell;
        updateToSell.push(newItems);
        this.setState({
            toSell: updateToSell,
            snackOpen: true,
            snackVariant: "success",
            snackText: `Sweet, added ${newItems.quantity} ${newItems.name} to your selection`,
        });
    };

    handleDownload = () => {
        const element = document.createElement("a");
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(genFile(this.state.toSell)))
        element.download = "For Sale.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    toggle = () => {
        if (!this.state.signedUp) {
            this.setState({
                modal: !this.state.modal
            });
        } else {
            //already signed up!
        }
    };

    getCardName = card => {
        let searchResults = this.state.buylist.filter(onListCards => onListCards.name === card.name);
        if (card === "") {
            searchResults = this.state.buylist;
        };

        this.setState({
            currentView: searchResults,
        });
    };
    handleSnackToggle = () => {
        this.setState({
            snackOpen: !this.state.snackOpen,
        })
    }

    render() {
        return (
            <div className="container">
                <Snackbar
                    autoHideDuration={3000}
                    open={this.state.snackOpen}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center"
                    }}
                    onClose={this.handleSnackToggle}
                >
                    <CustomSnackbar
                        className="mt-3 font-bold"
                        text={this.state.snackText}
                        variant={this.state.snackVariant}
                        onClose={this.handleSnackToggle}
                    />
                </Snackbar>
                <div id="buylist-container">
                    <div id="Searchbar">
                        <div className="pt-3" id="buylist-title">
                            <h2>Buy List</h2>
                        </div>
                        <span className="text-dark">Search Buylist:</span>< br />
                        <span className="text-dark">***All prices are subject to change***</span><br />
                        <MTGAutoComplete
                            className="blAutoComplete"
                            return={this.getCardName}
                        />
                        <MDBRow>
                            <MDBBtn className="mx-auto" onClick={this.toggle}>Review your selection</MDBBtn>
                        </MDBRow>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div id="card-display">
                                <Card buylist={this.state.currentView} onSell={this.onSell} />
                            </div>

                        </div>
                    </div>
                </div>
                <MDBModal className="signupModal" isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>Please review before downloading:<br />ALL PRICES SUBJECT TO CHANGE</MDBModalHeader>
                    <MDBModalBody>
                        {this.state.toSell.map(card => {
                            return (
                                <div className="w-100" key={card.name}>
                                    <div className="w-100 d-flex justify-content-between">
                                        x{card.quantity}
                                        <span> {card.name} </span>
                                        Total: {card.total.toFixed(2)}
                                    </div>

                                </div>
                            )
                        })}
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Cancel</MDBBtn>
                        <MDBBtn className="mx-auto" onClick={this.handleDownload}>Download</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        )
    }
}

export default Buylist;