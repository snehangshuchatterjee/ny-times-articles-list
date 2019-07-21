import React from "react";

const ArticleCardBodyComponent = (props) => {
    const { title, abstract, id } = props.articleData;
    const { handleViewMore } = props;

    return (
        <div >
            <header className="articleCardHeading">{title}</header>
            <main>{abstract}</main>
            <footer className="articleCardViewMore"
                onClick={() => {
                    handleViewMore(id);
                }}
            >
                View More...
            </footer>
        </div>
    );
}

export default ArticleCardBodyComponent;