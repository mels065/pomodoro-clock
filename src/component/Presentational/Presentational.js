import React, {Component} from 'react';
import './Presentational.css';

import Clock from '../Clock/Clock';

class Presentational extends Component {
  render() {
    return (
      <div className="Presentational">
        <header>
          <h1>Pomodoro Clock</h1>
        </header>
        <main>
          <Clock
            initialMinutes={this.props.initialMinutes}
            initialSeconds={this.props.initialSeconds}
            ticking={this.props.ticking}
            updating={this.props.updating}
            resetting={this.props.resetting}
            finishedUpdating={this.props.updateFinishedSetting}
            finishedResetting={this.props.resetFinishedControl}

            pomodoroSetting={this.props.pomodoroSetting}
            shortBreakSetting={this.props.shortBreakSetting}
            longBreakSetting={this.props.longBreakSetting}
            startControl={this.props.startControl}
            stopControl={this.props.stopControl}
            resetControl={this.props.resetControl} />
        </main>
        <footer>
          <div className="copyright">Brandon Mellus &copy; (2017)</div>
        </footer>
      </div>
    )
  }
}

export default Presentational;
