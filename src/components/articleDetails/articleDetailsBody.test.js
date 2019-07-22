import React from 'react';
import { shallow } from 'enzyme';
import { Container, Row, Col } from "react-bootstrap";

import { ArticlesDetailsBodyComponent } from './articleDetailsBody'

describe("Articles Details Body Component", () => {
    let article, wrapper, pushMock;
    beforeEach(() => {
        article = {
            media: "",
            byline: "",
            abstract: "",
            published_date: "",
            adx_keywords: "",
            url: ""
        };

        pushMock = jest.fn();
        let history = {
            push: pushMock
        }

        wrapper = shallow(<ArticlesDetailsBodyComponent article={article} history={history} />);
    });
    it("should render the component properly without crashing", () => {
        expect(wrapper.find(Container).length).toEqual(1);
        expect(wrapper.find(Row).length).toEqual(1);
        expect(wrapper.find(Col).length).toEqual(2);
    });

    it("should call the onClick method if user clicks on the component", () => {
        wrapper.find("footer").at(1).simulate('click');

        expect(pushMock).toHaveBeenCalled();
    });
});