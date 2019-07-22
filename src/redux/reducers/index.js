import { combineReducers } from 'redux';
import { fetchArticleListReducer } from './fetchArticles';
import { setSelectedArticleReducer } from './selectArticle';

export default combineReducers({
    articleList: fetchArticleListReducer,
    selectedArticle: setSelectedArticleReducer
});