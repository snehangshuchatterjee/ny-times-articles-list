import { FETCH_ARTICLE_LIST, FETCH_ARTICLE_LIST_SUCCESS, FETCH_ARTICLE_LIST_FAIL } from '../../actions/actionTypes';

const initialState = {
    loading: false,
    articles: [],
    dataFetchError: false
}

export const fetchArticleListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTICLE_LIST:
            return {
                ...state,
                loading: true
            };
        case FETCH_ARTICLE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                articles: action.payload.data
            };
        case FETCH_ARTICLE_LIST_FAIL:
            return {
                ...state,
                loading: false,
                dataFetchError: "Error while fetching the list of Articles"
            };
        default:
            return state;
    }
}