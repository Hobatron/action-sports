import React from 'react';
import api from "./api"
//import './ReviewWidget.css'
class ReviewsWidget extends React.Component {
    componentDidMount() {
        api.getReviews()
        .then(result => {
            console.log(result);
           
        })
    }

    render() {
        return <div id="reviews-widget"></div>
    }
}


export default ReviewsWidget;