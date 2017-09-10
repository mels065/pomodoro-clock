import React from 'react';
import ReactDOM from 'react-dom';

import Presentational from './Presentational';

describe('Presentational', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Presentational
                      initialTime={{minutes: 25, seconds: 0}} />, div);
  });
});
