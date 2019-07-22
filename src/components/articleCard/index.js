import React from 'react';
import PropTypes from 'prop-types';
import ImageComponent from '../common/image';
import ArticleCardBodyComponent from './articleCardBody';

import './articleCard.css';

const ArticleCardComponent = (props) => {
    const { articleData, onClick } = props;
    return (
        <div className="articleCard" onClick={() => {
            onClick(articleData);
        }}>
            <div className="container">
                <div className="row articleCardItem">
                    <div className="col-sm-12 col-md-3 articleCardImage">
                        <ImageComponent imageData={articleData.media[0]} imageIndex={7} />
                    </div>
                    <div className="col-sm-12 col-md-9 articleCardBody">
                        <ArticleCardBodyComponent articleData={articleData} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ArticleCardComponent;

ImageComponent.propTypes = {
    articleData: PropTypes.object,
    handleViewMore: PropTypes.func
}