import React from 'react';
import { shallow } from 'enzyme';
import App from '../app/scripts/views/layouts/app';

describe('Hello BalmJS', () => {
  it('should be "Welcome to React"', () => {
    // Place your tests here.
    const wrapper = shallow(<App />);
    expect(wrapper.find('h2').text()).toEqual('Welcome to React');
  });
});
