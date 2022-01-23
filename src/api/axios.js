import axios from "axios";

let headers = {
    "Content-Type": "application/json",
};
export const API = axios.create({
    baseURL: `${process.env.REACT_APP_BASEURL}`,
    headers: headers,
});