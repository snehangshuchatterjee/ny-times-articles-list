import React from 'react';
import { shallow } from 'enzyme';

import ArticleCardBodyComponent from "./articleCardBody";

describe("Article Card Component", () => {
    let wrapper, handleViewMore, articleData;

    beforeEach(()=>{
        handleViewMore = jest.fn();
        articleData = {
            title: "TestTitle",
            abstract: "Abstract",
            id: 1
        }

        wrapper = shallow(<ArticleCardBodyComponent handleViewMore={handleViewMore} articleData={articleData} />);

    });

    it("should render the component properly without crashing", () => {        
        expect(wrapper.find("div").length).toEqual(1);
        expect(wrapper.find("header").length).toEqual(1);
        expect(wrapper.find("main").length).toEqual(1);
        expect(wrapper.find("footer").length).toEqual(1);
    });

    it("should fire the onClick handler in case of a user click", ()=>{
        wrapper.find("footer").simulate('click');
        expect(handleViewMore).toHaveBeenCalled();
    });
});