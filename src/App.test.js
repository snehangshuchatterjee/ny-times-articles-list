import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import configureMockStore from 'redux-mock-store';

import RouteComponent from './components/routes';

const mockStore = configureMockStore();

describe("App", () => {
  let wrapper, store;
  beforeEach(() => {
    const initialState = {}
    store = mockStore(initialState);

    wrapper = shallow(<App store={store} />);
  });
  it('renders without crashing', () => {
    expect(wrapper.find(RouteComponent).length).toEqual(1)
  });
});
