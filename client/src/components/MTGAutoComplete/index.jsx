import React, { Component } from 'react'
import { MDBInput } from 'mdbreact';
import api from './api';
import './index.css'

export class MTGAutoComplete extends Component {
	state = {
		cardQ: '',
		searchResults: [],
		hiddenResults: [],
		canHide: true,
	}

	handleChange = event => {
		if (!event.target.value) {
			this.props.return("")
		}
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

	handleMouseEnter = (event) => {
		this.setState({
			canHide: false
		})
	}

	handleMouseLeave = (event) => {
		this.setState({
			canHide: true
		})
	}

	handleBlur = () => {
		if (this.state.canHide) {
			this.setState({
				searchResults: [],
				hiddenResults: this.state.searchResults,
			})
		}
	}

	handleFocus = () => {
		this.setState({
			searchResults: this.state.hiddenResults,
			hiddenResults: [],
		})
	}

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
					onBlur={this.handleBlur}
					onFocus={this.handleFocus}
					outline
				/>
				{this.state.searchResults.length > 0 &&
					<div className={this.props.className || "autocomplete"}>
						<ul>
							{this.state.searchResults.map(name => {
								return (
									<li
										onClick={this.handleCardClick}
										key={name}
										onMouseEnter={this.handleMouseEnter}
										onMouseLeave={this.handleMouseLeave}
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
