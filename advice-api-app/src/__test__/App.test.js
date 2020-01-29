import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../components/Header';
import AdviceResult from '../components/AdviceResult';
import ButtonFetch from '../components/ButtonFetch';

describe('App component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });
  it('should render as expected', () => {
    expect(component.contains(<Header />)).toBe(true);
  });
  it('should render as expected', () => {
    expect(component.contains(<AdviceResult />)).toBe(true);
  });
  it('should render as expected', () => {
    expect(component.contains(<ButtonFetch />)).toBe(true);
  });
});
