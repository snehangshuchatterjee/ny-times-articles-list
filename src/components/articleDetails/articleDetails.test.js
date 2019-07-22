import React from 'react';
import { shallow } from 'enzyme';

import store from '../../redux/store';

import { ConnectedArticleDetailsComponent } from '.';

describe("Articles Details Body Component", () => {
    let wrapper, selectedArticle, history;
    beforeEach(() => {
        selectedArticle = ["", ""];
        history = {
            push: jest.fn()
        }
        wrapper = shallow(<ConnectedArticleDetailsComponent store={store} selectedArticle={selectedArticle} history={history} />);
    });

    it("should render the component properly without crashing", () => {
        let currentWrapper = wrapper.dive().dive();

        currentWrapper.setProps({
            selectedArticle: ["", ""]
        });

        expect(currentWrapper.find("iframe").length).toEqual(1);
    });

    it("should call the onClick method if user clicks on the component", () => {
        wrapper.dive().dive();

        expect(history.push).toHaveBeenCalled();
    });
});