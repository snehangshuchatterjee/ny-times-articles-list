import React from 'react';
import { shallow } from 'enzyme';

import ArticleCardComponent from "./";

describe("Article Card Component", () => {
    let handleClick, articleData, wrapper;
    beforeEach(() => {
        handleClick = jest.fn();
        articleData = {
            media: ["", ""]
        }

        wrapper = shallow(<ArticleCardComponent handleViewMore={handleClick} articleData={articleData} onClick={handleClick} />);

    });
    it("should render the component properly without crashing", () => {
        expect(wrapper.find("div").length).toEqual(5);
    });

    it("should trigger onClick if user clicks on the component", () => {
        wrapper.find("div").first().simulate('click');
        expect(handleClick).toHaveBeenCalled();
    });
});