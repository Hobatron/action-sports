import React, { Component } from 'react'
import { MDBInput } from 'mdbreact';
import api from './api';
import './index.css'

export class MTGAutoComplete extends Component {
	state = {
		cardQ: '',
		searchResults: [],
	}

	handleChange = event => {
		this.setState({
			cardQ: event.target.value
		}, () => {
			api.autoComplete(this.state.cardQ, (results) => {
				this.setState({
					searchResults: results
				})
			})
		});
	};

	handleCardClick = event => {
		let chosenCard = event.target.textContent;
		api.cardDetails(chosenCard, (results) => {
			const cardDetails = {
				name: chosenCard,
				price: (Math.round((results.usd / 2) * 4) / 4).toFixed(2),
				image: results.image_uris.normal,
			};
			this.props.return(cardDetails)
			this.setState({
				searchResults: [],
				cardQ: chosenCard,
			});
		});
	};

	render() {
		return (
			<div>
				<MDBInput
					label="Card Name"
					value={this.state.cardQ}
					onChange={this.handleChange}
					outline
				/>
				{this.state.searchResults.length > 0 &&
					<div className="autocomplete">
						<ul>
							{this.state.searchResults.map(name => {
								return (
									<li
										onClick={this.handleCardClick}
										key={name}
									>{name}
									</li>
								);
							})}
						</ul>
					</div>
				}
			</div>
		)
	}
}

export default MTGAutoComplete
