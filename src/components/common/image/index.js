import React from 'react';

import './image.css';

const ImageComponent = (props) => {
    const { imageData, imageIndex } = props;
    const { copyright } = imageData;
    const { url, width, height } = imageData['media-metadata'][imageIndex];

    return (
        <>
            <figure>
                <img src={url}
                    width={width}
                    height={height}
                    alt="Not Loaded"
                >
                </img>
                <figcaption className="imageCaption"><strong>Photo By: </strong>{copyright ? copyright : "Unknown"}</figcaption>
            </figure>
        </>
    );
}

export default ImageComponent;