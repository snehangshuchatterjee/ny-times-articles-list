import { FETCH_ARTICLE_LIST } from '../actionTypes';

import { getArticleListURL } from "../../../utils/endpointURLUtils";

export const getArticleList = () => {
    return ({
        type: FETCH_ARTICLE_LIST,
        payload: {
            request: {
                url: getArticleListURL()
            }
        }
    });
}