import axios from "axios";

export default {
    get: (url, func) => {
        axios.get(url)
            .then((res) => {
                if (typeof res.data !== "string") {
                    res.data.forEach((e) => {
                        e.end = e.start;
                    });
                };
                func(res.data);
            });
    },
    post: (url, data, func) => {
        console.log(data)
        axios.post(url, data)
            .then(res => {
                func(res);
            });
    }
};