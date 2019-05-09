import axios from "axios";

export default {
  get: function (func) {
    return axios({
        method: 'get',
        url: '/api/weeklyCal'
      })
        .then(function(response) {
            func(response);
        })
    }
}