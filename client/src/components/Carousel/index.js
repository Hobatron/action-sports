import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import api from "./api";
import "./Carousel.css"

class CarouselWidget extends Component {
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
      <div className="front-page-carousel">
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="d-block carousel"
              src="https://cdn.vox-cdn.com/thumbor/Xg73Wmss7ayeQrmFCpwxB9EAvz4=/0x39:1200x839/1200x800/filters:focal(0x39:1200x839)/cdn.vox-cdn.com/uploads/chorus_image/image/39081106/Bearer-of-the-Heavens-MtG-Art.0.0.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        ;
      </div>
    );
  }
}

export default CarouselWidget;
