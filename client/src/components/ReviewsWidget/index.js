
import React, { Component } from "react";
import api from "./api";
import "./ReviewsWidget.css";
import React from 'react';
import api from "./api"
import './ReviewsWidget.css'
class ReviewsWidget extends React.Component {
    state = {
        reviews: [{
            author_name: "dan"
        }]
    }
    componentDidMount() {
        api.getReviews()
            .then(result => {
                this.setState({
                    reviews: result
                })
                console.log(result);

class ReviewsWidget extends Component {
  state = {
    results: []
  };

  componentWillMount() {
    api.getReviews().then(results => {
      this.setState({
        results: results
      });
    });
  }
  render() {
    return (
      <div id="reviews-widget">
        <div id="reviewsTitle">
          <h2>Customer Reviews</h2>
        </div>
        <div id="authorsRating">
          {this.state.results.map(result => (
            <div>
              <p
                id="authorsName"
                key={`${result.author_name}_${result.author_name}`}
              >
                {" "}
                {result.author_name}
              </p>
              <p id="authorRating" key={`${result.rating}_${result.rating}`}>
                {" "}
                {result.rating}/5
              </p>
              <p
                id="authorsTime"
                key={`${result.relative_time_description}_${
                  result.relative_time_description
                }`}
              >
                {" "}
                {result.relative_time_description}
              </p>
              <p id="authorsReview" key={`${result.text}_${result.text}`}>
                {" "}
                {result.text}
              </p>
           
            </div>
          ))}
        </div>
        
      </div>
    );
  }
    render() {
        return <div id="reviews-widget" > {
            this.state.reviews[0].author_name
        } < br /> {
                this.state.reviews[0].rating
            } < br /> {
                this.state.reviews[0].text
            } </div>

    }
}

export default ReviewsWidget;
