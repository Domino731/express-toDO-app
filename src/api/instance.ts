import axios from "axios";
import {API_CONSTANTS} from "./const";

/** axios api instance */
export const api = axios.create({
    baseURL: API_CONSTANTS.LOCALHOST,
    headers: {
        'Content-Type': 'application/json',
    },
});