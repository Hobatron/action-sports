import axios from "axios";

export default {
    post: (url, data) => {
        axios.post(url, data)
            .then((res) => {
                return res.data;
            });
    },
}