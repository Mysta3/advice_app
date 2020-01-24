import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../components/Header';

describe('App component', () => {
  it('should render as expected', () => {
    const component = shallow(<App />);
    expect(component.contains(<Header />)).toBe(true);
  });
});
