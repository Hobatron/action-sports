import React, { Component } from 'react';
import './Buylist.css';
import api from "./api";
import Card from '../../components/Card';
import MTGAutoComplete from '../../components/MTGAutoComplete';
import { MDBBtn, MDBRow } from 'mdbreact'

function genFile(forSaleListObj) {
    const obj = forSaleListObj;
    let txt = "\nDownloaded via actionsports.com\r\n\n"
     + "\r\n****ALL PRICES ARE SUBJECT TO CHANGE****"
     +"Qnt:\tEach:\tCard:\t\t\tTotal:\r\n"

    let totalCards = 0;
    let totalValue = 0;
    obj.forEach((card) => {
        totalCards += parseInt(card.quantity);
        totalValue += card.total;
        txt += `\nx${card.quantity}\t$${card.per.toFixed(2)}\t${card.name}\t\t$${card.total.toFixed(2)}\r\n`
    });
    txt += `\r\n\nTotal cards: ${totalCards} \t\t\t\t\tTotal: $${totalValue.toFixed(2)}`

    return txt
}

class Buylist extends Component {
    state = {
        cardName: "",
        buylist: [],
        currentView: [],
        toSell: [],
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
            toSell: updateToSell
        });
    };

    handleDownload = () => {
        const element = document.createElement("a");
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(genFile(this.state.toSell)))
        element.download = "For Sale.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
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

    render() {
        return (
            <div className="container">
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
                            <MDBBtn className="mx-auto" onClick={this.handleDownload}>Download your for sale list</MDBBtn>
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
            </div>
        )
    }
}

export default Buylist;