import { FETCH_DATA_LIST, FETCH_DATA_LIST_SUCCESS, FETCH_DATA_LIST_FAIL } from '../../actions/actionTypes';

const initialState = {
    loading: false,
    articles: [],
    dataFetchError: false
}

export const fetchArticleListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_LIST:
            return {
                ...state,
                loading: true
            };
        case FETCH_DATA_LIST_SUCCESS:
            console.log(action.payload.data.results);
            return {
                ...state,
                loading: false,
                articles: action.payload.data
            };
        case FETCH_DATA_LIST_FAIL:
            console.log("Error");
            return {
                ...state,
                loading: false,
                dataFetchError: "Error while fetching the list of Articles"
            };
        default:
            return state;
    }
}