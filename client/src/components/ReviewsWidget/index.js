import React, { Component } from "react";
import api from "./api";
import "./ReviewsWidget.css";

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
           <div key={result.author_name}>
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
}

export default ReviewsWidget;