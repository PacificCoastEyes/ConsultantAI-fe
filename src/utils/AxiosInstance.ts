import axios from "axios";

const instance = axios.create({
    baseURL: "https://consultantai-be.azurewebsites.net/api",
    validateStatus: status => {
        return status < 400;
    },
});

export default instance;
