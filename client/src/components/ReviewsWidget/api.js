import axios from "axios";

export default {
  getReviews: function () {
    return axios({
        method: 'get',
        url: '/api/maps'
      })
        .then(function(response) {
            return response.data.result.reviews;
        })
    }
}