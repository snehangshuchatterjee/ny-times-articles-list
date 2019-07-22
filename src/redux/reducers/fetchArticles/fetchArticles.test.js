import React from 'react';

import * as actions from '../../actions/fetchArticles';
import * as actionTypes from '../../actions/actionTypes'
import { fetchArticleListReducer } from '.';

describe("Fetch Articles Reducer", () => {
    let initialState, data;
    beforeEach(() => {
        initialState = {
            loading: false,
            articles: [],
            dataFetchError: false
        };
        data = [
            {
                "id": 1, "name": "Divavu", "startDate": "9/19/2017", "endDate": "3/9/2018", "Budget": 88377
            }
        ];
    });
    describe("Fetch Articles", () => {
        it("should return the data even if state is not provided", () => {
            let expectedOutcome = { loading: true, articles: [], dataFetchError: false };
            expect(fetchArticleListReducer(undefined, actions.getArticleList())).toEqual(expectedOutcome);
        });

        it("should return the state as it is if an invalid action is send", () => {
            expect(fetchArticleListReducer(initialState, { type: "TEST_ACTION" })).toEqual(initialState);
        });

        it("should return the state with with an error message if there is a failure in fetching the data", () => {
            let expectedOutcome = { loading: false, articles: [], dataFetchError: "Error while fetching the list of Articles" };
            expect(fetchArticleListReducer(initialState, { type: actionTypes.FETCH_ARTICLE_LIST_FAIL })).toEqual(expectedOutcome);
        });

        it("should add the data to the state", () => {
            let action = {
                type: actionTypes.FETCH_ARTICLE_LIST_SUCCESS,
                payload: {
                    data: data
                }
            };
            let expectedOutcome = {
                loading: false,
                articles: data,
                dataFetchError: false
            }
            expect(fetchArticleListReducer(initialState, action)).toEqual(expectedOutcome);
        });
    });
});