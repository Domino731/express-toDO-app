import axios from "axios";
import {API_CONSTANTS} from "./const";

/** axios api instance */
export const api = axios.create({
    baseURL: API_CONSTANTS.LOCALHOST,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': true
    },
});