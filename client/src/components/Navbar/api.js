import axios from "axios";

export default {
    post: (url, data, f) => {
        axios.post(url, data)
            .then((res) => {
                f(res.data);
            })
            .catch(err => {
                f("err")
            })
    }
}