import React, { Component } from 'react';
import './Buylist.css';
import api from "./api";
import Card from '../../components/Card';
import MTGAutoComplete from '../../components/MTGAutoComplete';

class Buylist extends Component {
    state = {
        cardName: "",
        buylist: [],
        currentView: [],
    };

    componentDidMount() {
        api.get((res) => {
            this.setState({
                buylist: res,
                currentView: res,
            })
        });
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
                        <span className="text-dark">Search Buylist:</span><br />

                        <MTGAutoComplete
                            className="blAutoComplete"
                            return={this.getCardName}
                        /><br />
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div id="card-display">
                                <Card buylist={this.state.currentView} onChange={this.handleQntChange}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Buylist;