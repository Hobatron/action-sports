import React from 'react';
import api from "./api"
import './ReviewsWidget.css'
class ReviewsWidget extends React.Component {
    state = {
        reviews: [{author_name: "dan"}]
    }
    componentDidMount() {
        api.getReviews()
            .then(result => {
                this.setState({
                    reviews: result
                })
                console.log(result);

            })
    }

    render() {
        return <div id="reviews-widget">{this.state.reviews[0].author_name} <br /> {this.state.reviews[0].rating} <br /> {this.state.reviews[0].text}</div>
        
    }
}


export default ReviewsWidget;