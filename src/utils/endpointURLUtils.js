import { ARTICLES_BASE_URL } from "../constants/endpoints";
import { API_KEY, PERIOD, SECTION } from "../constants/urlParams";

export const getDataListURL = () => {
    let baseURL = ARTICLES_BASE_URL;
    let listURL = baseURL + `${SECTION}/${PERIOD}.json?api-key=${API_KEY}`;

    return listURL;
}