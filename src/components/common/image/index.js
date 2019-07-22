import React from 'react';
import PropTypes from 'prop-types';

import './image.css';

const ImageComponent = (props) => {
    const { imageData, imageIndex } = props;
    const { copyright } = imageData;
    const { url, width, height } = imageData['media-metadata'][imageIndex];

    return (
        <figure>
            <img src={url}
                width={width}
                height={height}
                alt="Not Loaded"
                className="imageClass"
            >
            </img>
            <figcaption className="imageCaption"><strong>Photo By: </strong>{copyright ? copyright : "Unknown"}</figcaption>
        </figure>
    );
}

export default ImageComponent;

ImageComponent.propTypes = {
    imageData: PropTypes.object,
    imageIndex: PropTypes.number
}