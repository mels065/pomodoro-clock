import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';

import {Provider} from 'react-redux';
import store from '../../redux/store';

describe('Container', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}><Container /></Provider>, 
      div
    );
  });
});
