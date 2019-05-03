import axios from "axios";

export default {
    getReviews: function () {
        return axios({
                method: 'get',
                url: '/api/carousel'
            })
            .then(function (response) {
                return response.data;
            })
    }
}