import React from "react";

const ArticleCardBodyComponent = (props) => {
    const { title, abstract, byline } = props.articleData;

    return (
        <div >
            <header className="articleCardHeading">{title}</header>
            <main className="mainBody">{abstract}</main>
            <footer className="articleCardViewMore">
                {byline}
            </footer>
        </div>
    );
}

export default ArticleCardBodyComponent;