import React, { Component } from 'react';
import NavBar from '../../components/Navbar';
import './Buylist.css';
import Card from '../../components/Card';
import MTGAutoComplete from '../../components/MTGAutoComplete';

class Buylist extends Component {
    state={
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
                            <div id="buylist-div">
                                Search for cards:<br /><br />
                                <form>
                                    <MTGAutoComplete 
                                        return={this.getCardName}
                                    /><br />
                                    <div id="card-display">
                                        <Card />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Buylist;