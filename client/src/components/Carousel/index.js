import React, { Component } from 'react';
import image from '../images/magic.jpg';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";
import './Carousel.css';
import api from "./api";


class CarouselPage extends Component {

  state = {
    items: [],
  }

  componentDidMount() {
    api.getCarousel().then(results => {
      this.setState({
        items: results
      }, () => {
        console.log(this.state.items)
      });
    });
  }
  render() {
    return (
      <MDBContainer className="front-page-carousel">
        {this.state.items.length > 0 && (
          <MDBCarousel activeItem={1} length={this.state.items.length} showControls={true} showIndicators={true} className="z-depth-1">
            <MDBCarouselInner>
              {this.state.items.map(item => {
                return (
                  <MDBCarouselItem itemId={item._id} key={item._id}>
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={item.images}
                        alt={item.description}
                      />
                    </MDBView>
                  </MDBCarouselItem>
                )
              })}
            </MDBCarouselInner>
          </MDBCarousel>

        )}
      </MDBContainer>
    );
  };
};

export default CarouselPage;