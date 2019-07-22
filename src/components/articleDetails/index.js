import React from 'react';
import { connect } from 'react-redux';
import { withRouter, } from "react-router-dom";

import HeaderComponent from '../common/header';
import './articleDetails.css';

const ArticleDetailsComponent = (props) => {
    const { selectedArticle } = props;
    const { title, url } = selectedArticle;

    //Navigate to list page if page has been reloaded 
    //and there is no data available
    if (selectedArticle.length < 1) {
        props.history.push('/');
        window.location.reload();
    }

    return (
        <>
            <HeaderComponent heading={title} />
            <iframe src={url}
                title={title}
                allowFullScreen={true}
                className="detailsIFrame"
            ></iframe>
        </>
    );
}

const mapStateToProps = (state) => {
    return ({
        selectedArticle: state.selectedArticle.selectedArticle
    });
}

export const ConnectedArticleDetailsComponent = connect(mapStateToProps)(ArticleDetailsComponent);

export default withRouter(ConnectedArticleDetailsComponent);