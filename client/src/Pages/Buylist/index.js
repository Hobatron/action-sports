import React, { Component } from 'react';
import './Buylist.css';
import api from "./api";
import Card from '../../components/Card';
import MTGAutoComplete from '../../components/MTGAutoComplete';

class Buylist extends Component {
	state={
		cardName: "",
		cards: [],
		buylist: [],
		currentView: [],
	}

	componentDidMount () {
		api.get((res) => {
			this.setState({
				buylist: res,
				currentView: res,
			})
		})
	}

	getCardName = card => {
		const searchResults = this.state.buylist.filter(onListCards => onListCards.name === card.name);
		this.setState({
			currentView: searchResults,
		})
	}

	render() {

		return (
			<div className="container">
				<div id="buylist-container">
				<div className="row">
					   <div className="col-3">
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
									<div className="col-9">
								   <div id="card-display">
									   <Card buylist={this.state.currentView}/>
								   </div>

							</div>
						</div>
					</div>
					</div>
		)
	}
}

export default Buylist;