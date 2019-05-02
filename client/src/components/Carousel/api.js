import axios from "axios";

export default {
  getCarousel: function () {
    return axios({
        method: 'get',
        url: '/api/carousel'
      })
        .then(function(response) {
            return response.data;
        })
    }
}