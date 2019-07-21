import React from 'react';
import ImageComponent from '../common/image';
import ArticleCardBodyComponent from './articleCardBody';

import './articleCard.css';

const ArticleCardComponent = (props) => {
    const { articleData, handleViewMore } = props;
    return (
        <div className="articleCard">
            <div className="container">
                <div className="row articleCardItem">
                    <div className="col-sm-12 col-md-3 articleCardImage">
                        <ImageComponent imageData={articleData.media[0]} imageIndex = {7} />
                    </div>
                    <div className="col-sm-12 col-md-9 articleCardBody">
                        <ArticleCardBodyComponent articleData={articleData} 
                            handleViewMore={handleViewMore}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ArticleCardComponent;