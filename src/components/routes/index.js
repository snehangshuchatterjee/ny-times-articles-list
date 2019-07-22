import React from 'react';
import { Router, Route } from 'react-router';
import history from './history';

import ArticleListComponent from "../articleList";
import ArticleDetailsComponent from "../articleDetails";

const RouteComponent = (props) => {
    return (
        <Router history={history}>
            <Route exact path="/" component={ArticleListComponent} />
            <Route exact path="/details" component={ArticleDetailsComponent} />
        </Router>
    );
}

export default RouteComponent;