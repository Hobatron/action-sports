import axios from "axios";
export default {
    post: function (url, data) {
        axios.post(url, data)
            .then(function (response) {
                return response.data;
            })
    }
}