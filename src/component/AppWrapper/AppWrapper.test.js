import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './AppWrapper';

describe('AppWrapper', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppWrapper />, div);
  });
});
