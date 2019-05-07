import axios from "axios";

export default {
    get: (func) => {
        axios.get("/api/calendar")
            .then((res) => {
                res.data.forEach((e) => {
                    e.end = e.start;
                })
                func(res.data);
            });
    },
}