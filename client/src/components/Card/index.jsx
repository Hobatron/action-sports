import React, { Component } from "react";
import "./Card.css";
import { MDBCol, MDBRow, MDBBtn } from "mdbreact";
import Select from '@material-ui/core/Select';


export class Cards extends Component {

	handleQntChange = (event) => {
		this.props.onChange(event)
	}

	render() {

		function qntCounter(maxBuy, cardName) {
			let options = [];
			for (let i = 0; i < maxBuy; i++) {
				options.push(
					<option
						key={i}>{i + 1}
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
										<MDBBtn>Sell</MDBBtn>
									</MDBRow>
									<MDBRow>
										<Select
											native
											value="0"
											onChange={this.handleQntChange}

										>
											{qntCounter(card.quantity, card.name)}
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
