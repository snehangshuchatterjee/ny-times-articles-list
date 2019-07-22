import React from 'react';
import { connect } from 'react-redux';
import { withRouter, } from "react-router-dom";

import ArticlesDetailsBodyComponent from './articleDetailsBody';

const ArticleDetailsComponent = (props) => {
    const { selectedArticle } = props;

    //Navigate to list page if page has been reloaded 
    //and there is no data available
    if (selectedArticle.length < 1) {
        props.history.push('/');
        window.location.reload();
    }

    return (
        <ArticlesDetailsBodyComponent article={selectedArticle} />
    );
}

const mapStateToProps = (state) => {
    return ({
        selectedArticle: state.selectedArticle.selectedArticle
    });
}

export const ConnectedArticleDetailsComponent = connect(mapStateToProps)(ArticleDetailsComponent);

export default withRouter(ConnectedArticleDetailsComponent);