import { ARTICLES_BASE_URL } from "../constants/endpoints";
import { API_KEY, PERIOD, SECTION } from "../constants/urlParams";

/**
 * Method to get the URL to fetch the list of articles
 */
export const getArticleListURL = () => {
    let baseURL = ARTICLES_BASE_URL;
    let listURL = baseURL + `${SECTION}/${PERIOD}.json?api-key=${API_KEY}`;

    return listURL;
}