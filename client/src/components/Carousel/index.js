import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import api from "./api";
import "./Carousel.css";

class CarouselWidget extends Component {
  state = {
    items: [],
    index: 0,
    direction: null
  };

  componentDidMount() {
    api.getCarousel().then(results => {
      console.log(results);
      this.setState(
        {
          items: results
        },
        () => {
          console.log(this.state.items);
        }
      );
    });
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  };

  render() {
    const { index, direction } = this.state;

    return (
      <div className="front-page-carousel">
        {/* {this.state.items.length > 0 && ( */}
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
          >
            {this.state.items.map(item => {
              return (
                <Carousel.Item key={item.name} className="carousel">
                  <img src={item.image} />
                  <Carousel.Caption>
                    <h3>{item.description}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
            {/* <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://magic.wizards.com/sites/mtg/files/AVS2efHWWj.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item> */}
          </Carousel>
        {/* )} */}
      </div>
    );
  }
}

export default CarouselWidget;
