import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ImageComponent from '../image';

const ModalBodyComponent = (props) => {
    const { article } = props;
    const { media, byline, abstract, published_date, adx_keywords, url } = article;

    return (
        <div>
            <Container>
                <Row className="show-grid">
                    <Col xs={6} md={6}>
                        <ImageComponent imageData={media[0]} imageIndex={0} />
                    </Col>
                    <Col xs={12} md={6} className="articleDetailsData">
                        <summary className="authorName">{byline}</summary>
                        <aside className="publishedDate">Published On: {published_date}</aside>
                        <section className="tags"><strong>Tags:</strong> {adx_keywords}</section>
                        <section className="description">{abstract}</section>
                        <footer className="fullArticle">
                            <a target="_blank"
                                href={url}
                                rel="noopener noreferrer"
                            >
                                Read full article..
                            </a>
                        </footer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ModalBodyComponent;