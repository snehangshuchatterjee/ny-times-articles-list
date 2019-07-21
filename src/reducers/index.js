import { combineReducers } from 'redux';
import { fetchArticleListReducer } from './fetchData';

export default combineReducers({
    articleList: fetchArticleListReducer
});