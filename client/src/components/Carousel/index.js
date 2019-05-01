import React from 'react';
import image from '../images/magic.jpg';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";
import './Carousel.css';
import axios from './api';

const CarouselPage = () => {
  return (
    <MDBContainer className="front-page-carousel">
      <MDBCarousel activeItem={1} length={1} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>

          {

          }
          {/* <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src={image} alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
             <h3 className="h3-responsive">Light mask</h3>
              <p>First text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem> */}


        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;