import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getArticleList } from "../../redux/actions/fetchArticles";
import { setSelectedArticle } from "../../redux/actions/selectArticle";
import ArticleCardComponent from '../articleCard';
import HeaderComponent from '../common/header';

class ArticleListComponent extends PureComponent {
    pageHeading = "Most Viewed Articles: NY Times";

    /**
     * Load the list of articles when the component finishes loading
     */
    componentDidMount = () => {
        this.props.getData();
    }

    /**
     * Method to set the selected article to the redux state 
     * and navigate to the /details route
     */
    handleArticleCardClick = (article) => {
        this.props.setArticle(article);
        this.props.history.push('/details');
    }

    render = () => {
        let { isLoading, isError, data } = this.props;

        return (
            <div >
                <HeaderComponent heading={this.pageHeading} />
                {(isLoading && !data.results) && <h3>Loading...</h3>}
                {isError && <h3>Unable to fetch data from the server</h3>}
                {data.results && data.results.map(article => {
                    return (
                        <ArticleCardComponent key={article.id}
                            articleData={article}
                            onClick={this.handleArticleCardClick}
                        />
                    );
                })}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return ({
        data: state.articleList.articles,
        isLoading: state.articleList.loading,
        isError: state.articleList.dataFetchError
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        getData: () => dispatch(getArticleList()),
        setArticle: (article) => dispatch(setSelectedArticle(article))
    });
}

export const ConnectedArticleList = connect(mapStateToProps, mapDispatchToProps)(ArticleListComponent);

export default withRouter(ConnectedArticleList);

