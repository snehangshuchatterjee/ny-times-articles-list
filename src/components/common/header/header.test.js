import React from 'react';
import {shallow} from 'enzyme';

import HeaderComponent from ".";

describe("Header Component", ()=>{
    let wrapper = shallow(<HeaderComponent />);

    it("should render the component properly without crashing", () => {
        expect(wrapper.find("div").length).toEqual(1);
    });
});