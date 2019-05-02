import React from "react";
import { MDBBtn, MDBCol, MDBCard, MDBCardBody, MDBCardGroup, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";


const BuyListCards = () => {
    return (
        <div className="text-align-center">
            <MDBCardGroup className="position-inline-block">
                {this.state.bookJSON.map(book => {
                    return (
                        <MDBCol className="test" key={book.id}>
                            <MDBCard className="mb-5 cardHover">
                                <MDBCardImage
                                    //  src={image1}
                                    alt="MDBCard image cap"
                                    top
                                    hover
                                    overlay="white-slight"
                                />
                                <MDBCardBody>
                                    <MDBCardTitle tag="h5">
                                        {/* <a href={book.volumeInfo.previewLink}> */}
                                            Example title
                                        {/* </a> */}
                                    </MDBCardTitle>
                                    <MDBCardText className="font-weight-bold">
                                        {book.volumeInfo.authors}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {book.volumeInfo.description.slice(0, 55).trim() + "..."}
                                    </MDBCardText>
                                    <MDBBtn rounded color={this.props.btnColor} onClick={this.saveButtonHandler} size="md" data-id={book.id}>
                                        {this.props.btnText}
                                    </MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    )
                })}
            </MDBCardGroup>
        </div>
    );
}

export default BuyListCards;