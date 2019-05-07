import axios from "axios";

export default {
    post: (url, data) => {
        axios.post(url, data)
            .then((res) => {
                return res.data;
            });
    },
    get: (url, func) => {
        axios.get(url)
            .then((res) => {
                res.data.forEach((e) => {
                    e.end = e.start;
                });
                func(res.data);
            });
    },
}