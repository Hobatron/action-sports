import React, { Component } from "react";
import "./Card.css";
import { MDBCol, MDBRow, MDBBtn } from "mdbreact";

export class Cards extends Component {

	render() {
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
									<MDBRow className="pb-3">
										Paying: {`$${card.price.toFixed(2)}`}
									</MDBRow>
									<MDBRow className="pb-3">
										Needing: {card.quantity}
									</MDBRow>
									<MDBRow className="pb-5">
										<MDBBtn>Sell</MDBBtn>
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
