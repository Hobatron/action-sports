import React, {
  Component
} from "react";
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
      console.log(results)
      this.setState({
        items: results
      });
    });
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  };

  render() {
    const {
      index,
      direction
    } = this.state;

    return (
      <div className="front-page-carousel" >
        <Carousel activeIndex={
          index
        }
          direction={
            direction
          }
          onSelect={
            this.handleSelect
          } >
          {
            this.state.items.map(item => {
              return (
                <Carousel.Item key={
                  item._id
                }
                  className="carousel" >
                  <img className="d-block w-100"
                    src={
                      item.image || item.urlImage || item.localImage
                    }
                    alt="" />
                  <Carousel.Caption >
                    <h1 style={
                      {
                        fontSize: 50,
                        color: item.color
                      }
                    } > {
                        item.description
                      } </h1>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </div>
    );
  }
}

export default CarouselWidget;