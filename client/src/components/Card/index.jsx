import React, { Component } from "react";
import "./Card.css";
import { MDBCol, MDBRow, MDBBtn } from "mdbreact";
import Select from '@material-ui/core/Select';


export class Cards extends Component {

	state = {}

	handleQntChange = (event) => {
		const card = event.target.childNodes[0];
		const cardName = card.getAttribute("data-name");
		const cardPrice = card.getAttribute("data-price");

		this.setState({
			[cardName]: {
				name: cardName,
				quantity: event.target.value,
				per: parseInt(cardPrice),
				total: parseInt(event.target.value * cardPrice),
			}
		})
	}

	handleSell = event => {
		const cardName = event.target.getAttribute("data-name")
		this.props.onSell(this.state[cardName])
	}

	render() {
		function qntCounter(maxBuy, price, name) {
			let options = [];
			for (let i = 0; i < maxBuy + 1; i++) {
				options.push(
					<option
						className="text-dark"
						key={i}
						value={i}
						data-price={price}
						data-name={name}
					>{i}
					</option>
				)
			};
			return options
		}
		return (
			<div>
				{this.props.buylist.map(card => {
					return (
						<div key={card.name} className="cardWrapper mt-3">
							<MDBRow>
								<MDBCol>
									<img className="cardIMG" alt={card.name} src={card.image} />
								</MDBCol>
								<MDBCol>
									<MDBRow className="pb-3 w-100">
										{card.name}
									</MDBRow>
									<MDBRow className="pb-1">
										Paying: {`$${card.price.toFixed(2)}`}
									</MDBRow>
									<MDBRow className="pb-2">
										Needing: {card.quantity}
									</MDBRow>
									<MDBRow>
										<MDBBtn
											onClick={this.handleSell}
											data-name={card.name}
										>Add
										</MDBBtn>
									</MDBRow>
									<MDBRow>
										<Select
											native
											onChange={this.handleQntChange}
											className="text-light"
										>
											{qntCounter(card.quantity, card.price, card.name)}
										</Select>
									</MDBRow>
								</MDBCol>
							</MDBRow>
						</div>
					)
				})}
			</div>
		);
	}
}

export default Cards;
