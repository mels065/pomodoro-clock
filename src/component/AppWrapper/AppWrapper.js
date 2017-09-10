import React, { Component } from 'react';
import './AppWrapper.css';
import store from '../../redux/store';
import {Provider} from 'react-redux';

import Container from '../Container/Container';

class AppWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default AppWrapper;
