import React, { Component } from 'react';
import NavBar from '../../components/Navbar';
import './Buylist.css';
import Card from '../../components/Card';
import MTGAutoComplete from '../../components/MTGAutoComplete';

class Buylist extends Component {
    state = {
        cardName: "",
        cards: []
    }

    getCardName = card => {
        console.log(card);
    }
    render() {

        return (
            <div className="container">
                <div id="buylist-container">
                    <div className="row">
                        <div className="col-12">
                            <div id="buylist-title">
                                <h2>Buy List</h2></div>
                            <br />
                            <div id="Searchbar">
                                Search Buylist:<br />
                                <form>
                                    <MTGAutoComplete
                                        return={this.getCardName}
                                    /><br />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div id="card-display">
                                <Card />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Buylist;