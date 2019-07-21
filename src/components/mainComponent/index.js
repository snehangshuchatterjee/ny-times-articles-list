import React, { Component } from 'react';
import { connect } from "react-redux";

import { getDataList } from "../../actions/fetchData";
import ArticleCardComponent from '../articleCard';
import ModalComponent from '../common/modal';
import HeaderComponent from '../header';

const mapStateToProps = (state) => {
    return ({
        data: state.articleList.articles,
        isLoading: state.articleList.isLoading,
        isError: state.articleList.isError
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        getData: () => dispatch(getDataList())
    });
}

class MainComponent extends Component {
    state = {
        showModal: false
    }

    componentDidMount = () => {
        this.props.getData();
    }

    handleModalClose = () => {
        this.setState({
            showModal: false
        });
    }

    handleViewMore = (id) => {
        this.setState({
            showModal: true,
            selectedArtidleId: id
        });
    }

    getArticleDetailsFromId = () => {
        let allArticles = this.props.data.results;
        for (let article in allArticles) {
            if (!allArticles.hasOwnProperty(article)) continue;
            if (allArticles[article].id === this.state.selectedArtidleId) {
                return allArticles[article];
            }
        }
    }

    render = () => {
        let props = this.props;

        return (
            <div >
                <p>{props.isLoading && <h3>Loading...</h3>}</p>
                <p>{props.isError && <h3>Unable to fetch data from the server</h3>}</p>
                <HeaderComponent />
                {props.data.results && props.data.results.map(article => {
                    return (
                        <ArticleCardComponent key={article.id}
                            articleData={article}
                            handleViewMore={this.handleViewMore}
                        />
                    );
                })}
                {this.state.showModal && <ModalComponent show={this.state.showModal}
                    article={this.getArticleDetailsFromId()}
                    handleClose={this.handleModalClose}
                />}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);

