import React from 'react';

import * as actions from '../../actions/selectArticle';
import { setSelectedArticleReducer } from '.';

describe("Selected Article Reducer", () => {
    let initialState;
    beforeEach(() => {
        initialState = {
            loading: false,
            articles: [],
            dataFetchError: false
        };
    });
    describe("Set Selected Article", () => {
        it("should return the data even if state is not provided", () => {
            let expectedOutcome = { selectedArticle: [] };
            expect(setSelectedArticleReducer(undefined, actions.setSelectedArticle([]))).toEqual(expectedOutcome);
        });

        it("should return the state as it is if an invalid action is send", () => {
            expect(setSelectedArticleReducer(initialState, { type: "TEST_ACTION" })).toEqual(initialState);
        });
    });
});