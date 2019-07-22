import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, } from "react-router-dom";
import ImageComponent from '../common/image';
import HeaderComponent from '../common/header';

import './modal.css';

export const ArticlesDetailsBodyComponent = (props) => {
    const { article } = props;
    const { media, byline, abstract, published_date, adx_keywords, url, title } = article;

    return (
        <Container >
            <HeaderComponent heading={title} />
            <Row className="articleDetails">
                <Col xs={12} md={12} className="detailImage">
                    <ImageComponent imageData={media[0]} imageIndex={0} />
                </Col>
                <Col xs={12} md={12} className="articleDetailsData">
                    <summary className="authorName">{byline}</summary>
                    <aside className="publishedDate">Published On: {published_date}</aside>
                    <section className="tags"><strong>Tags:</strong> {adx_keywords}</section>
                    <section className="description">{abstract}</section>
                    <footer className="fullArticle">
                        <a target="_blank"
                            href={url}
                            rel="noopener noreferrer"   //Open the article in a new tab
                        >
                            Read full article..
                            </a>
                    </footer>
                    <footer className="goBack fullArticle"
                        onClick={() => {
                            props.history.push('/');    // Go to the Previous page
                        }}
                    >
                        Go Back
                        </footer>
                </Col>
            </Row>
        </Container>
    );
}

export default withRouter(ArticlesDetailsBodyComponent);