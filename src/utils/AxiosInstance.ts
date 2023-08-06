import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/api",
    validateStatus: status => {
        return status < 400;
    },
});

export default instance;
