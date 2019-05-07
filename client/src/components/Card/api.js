import axios from "axios";

export default {
    get: (func) => {
        axios.get("/api/buylist")
            .then((res) => {
                res.data.forEach((e) => {
                    e.end = e.start;
                })
                func(res.data);
            });
    },
}