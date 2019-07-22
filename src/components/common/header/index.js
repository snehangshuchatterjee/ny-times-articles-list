import React from 'react';

import './header.css';

const HeaderComponent = (props) => {
    const {heading} = props;
    return(
        <div className="mainHeading"> {heading} </div>
    );
}

export default HeaderComponent;