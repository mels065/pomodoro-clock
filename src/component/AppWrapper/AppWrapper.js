import React, { Component } from 'react';
import './AppWrapper.css';
import store from '../../redux/store';
import {Provider} from 'react-redux';

class AppWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <div></div>
      </Provider>
    );
  }
}

export default AppWrapper;
