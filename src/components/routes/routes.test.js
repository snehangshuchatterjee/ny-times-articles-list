import React from 'react';
import { shallow } from 'enzyme';
import { Router, Route } from 'react-router';

import RouteComponent from './';

describe("Route Component", ()=>{
    it("should return the Router component", ()=>{
        const wrapper = shallow(<RouteComponent />);

        expect(wrapper.find(Router).length).toEqual(1);
        expect(wrapper.find(Route).length).toEqual(2);
    })
});