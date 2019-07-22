import { SET_SELECTED_ARTICLE } from '../../actions/actionTypes';

const initialState = {
    selectedArticle: []
}

export const setSelectedArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_ARTICLE:
            return {
                ...state,
                selectedArticle: action.payload
            };
        default:
            return state;
    }
}