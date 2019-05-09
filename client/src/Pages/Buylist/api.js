import axios from "axios";

export default {
    get: (func) => {
        axios.get("/api/buylist")
            .then((res) => {
                func(res.data);
            });
    },
}