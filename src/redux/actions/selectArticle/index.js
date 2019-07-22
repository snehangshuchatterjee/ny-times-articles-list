import { SET_SELECTED_ARTICLE } from '../actionTypes';

export const setSelectedArticle = (article) => {
    return ({
        type: SET_SELECTED_ARTICLE,
        payload: article
    });
}