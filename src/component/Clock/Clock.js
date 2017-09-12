import React, {Component} from 'react';
import './Clock.css';

import ButtonPanel from '../ButtonPanel/ButtonPanel';

import {renderSeconds} from '../../utils/render-seconds';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: props.initialMinutes,
      seconds: props.initialSeconds,
      ticking: props.ticking,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.updating || nextProps.resetting) {
      this.setState({
        minutes: nextProps.initialMinutes,
        seconds: nextProps.initialSeconds,
        ticking: false
      });
      if (nextProps.updating) nextProps.finishedUpdating();
      else if (nextProps.resetting) nextProps.finishedResetting();
    }
    else {
      this.setState({
        ticking: nextProps.ticking
      });
    }
  }

  tick() {
    if (this.state.minutes === 0 && this.state.seconds === 0) {
      this.props.resetControl();
    }
    else if (this.state.minutes > 0 && this.state.seconds === 0) {
      this.setState({
        minutes: this.state.minutes - 1,
        seconds: 59
      })
    }
    else {
      this.setState({
        seconds: this.state.seconds - 1
      });
      if (this.state.minutes === 0 && this.state.seconds === 0) {
        /*play sound*/
      }
    }
  }

  render() {
    return (
      <div className="Clock">
        <div className="time">{this.state.minutes}:{renderSeconds(this.state.seconds)}</div>
        <ButtonPanel
          pomodoroSetting={this.props.pomodoroSetting}
          shortBreakSetting={this.props.shortBreakSetting}
          longBreakSetting={this.props.longBreakSetting}
          startControl={() => { this.props.startControl(this.tick.bind(this)) }}
          stopControl={this.props.stopControl}
          resetControl={this.props.resetControl} />
      </div>
    )
  }
}

export default Clock;
