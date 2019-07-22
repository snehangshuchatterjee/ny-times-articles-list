import React from 'react';
import { shallow } from 'enzyme';
import store from '../../redux/store';

import ArticleCardComponent from '../articleCard';
import { ConnectedArticleList } from "./";
import HeaderComponent from '../common/header';

describe("Article List Component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ConnectedArticleList store={store} />);
    });

    describe("render", () => {
        it("should render properly without crashing", () => {
            let currentWrapper = wrapper.dive().dive();

            expect(currentWrapper.find(HeaderComponent).length).toEqual(1);
        });

        it("should render Loading if isLoading is true", () => {
            let currentWrapper = wrapper.dive().dive();

            currentWrapper.setProps({
                isLoading: true
            });

            expect(currentWrapper.find("h3").length).toEqual(1);
        });

        it("should render Error message if isError has a value", () => {
            let currentWrapper = wrapper.dive().dive();

            currentWrapper.setProps({
                isLoading: false,
                isError: "Error Message"
            });

            expect(currentWrapper.find("h3").length).toEqual(1);
        });

        it("renders the ArticleCardComponent if data is present in the props", () => {
            let currentWrapper = wrapper.dive().dive();

            currentWrapper.setProps({
                data: {
                    results: [""]
                }
            });

            expect(currentWrapper.find(ArticleCardComponent).length).toEqual(1);
        });
    });

    describe("handleArticleCardClick", () => {
        it("should return the article with the given id", () => {
            let currentWrapper = wrapper.dive().dive();
            let pushMock = jest.fn();
            store.dispatch = jest.fn;

            currentWrapper.setProps({
                history: {
                    push: pushMock
                }
            });

            currentWrapper.instance().handleArticleCardClick({
                media: "",
                byline: "",
                abstract: "",
                published_date: "",
                adx_keywords: "",
                url: ""
            });

            expect(pushMock).toHaveBeenCalled();
        })
    });
});