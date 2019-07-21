import axios from 'axios';
import { ARTICLES_BASE_URL } from "../constants/endpoints";

export const client = axios.create({
    baseURL: ARTICLES_BASE_URL,
    responseType: 'json'
});
