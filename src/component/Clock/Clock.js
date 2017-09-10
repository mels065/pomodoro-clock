import React, {Component} from 'react';
import './Clock.css';

import {renderSeconds} from '../../utils/render-seconds';

class Clock extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      remainingMinutes: props.initialMinutes,
      remainingSeconds: props.initialSeconds,
      ticking: false
    };
  }

  render() {
    return (
      <div className="Clock">
        <div className="time">{this.state.remainingMinutes}:{renderSeconds(this.state.remainingSeconds)}</div>
      </div>
    )
  }
}

export default Clock;
