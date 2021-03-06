import React, {Component} from 'react';
import './ButtonPanel.css';

import Button from './Button/Button';

class ButtonPanel extends Component {
  render() {
    return (
      <div className="ButtonPanel">
        <div id="time-setting-panel" className="panel">
          <Button
            buttonLabel="Pomodoro"
            clickHandler={this.props.pomodoroSetting} />
          <Button
            buttonLabel="Short Break"
            clickHandler={this.props.shortBreakSetting} />
          <Button
            buttonLabel="Long Break"
            clickHandler={this.props.longBreakSetting} />
        </div>
        <div id="time-control-panel" className="panel">
          <Button
            buttonLabel="Start"
            clickHandler={this.props.startControl} />
          <Button
            buttonLabel="Stop"
            clickHandler={this.props.stopControl} />
          <Button
            buttonLabel="Reset"
            clickHandler={this.props.resetControl} />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
