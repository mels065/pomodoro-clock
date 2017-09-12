import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';

import Clock from './Clock';

describe('Clock', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Clock />, div);
  });

  describe('Clock.prototype.tick', () => {
    it('counts down 1 second each tick', () => {
      const instance = shallow(<Clock
        initialMinutes = {0}
        initialSeconds = {5}
        ticking = {true}
      />).instance();
      instance.tick();

      expect(instance.state.minutes).toEqual(0);
      expect(instance.state.seconds).toEqual(4);
    });
    it('counts down by a minute when there are 0 seconds and wraps around to 59 seconds', () => {
      const instance = shallow(<Clock
        initialMinutes = {1}
        initialSeconds = {0}
        ticking = {true}
      />).instance();
      instance.tick();

      expect(instance.state.minutes).toEqual(0);
      expect(instance.state.seconds).toEqual(59);
    });
  });
});
