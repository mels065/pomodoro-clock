import React, {Component} from 'react';
import './Presentational.css';

import Clock from '../Clock/Clock';

class Presentational extends Component {
  render() {
    return (
      <div className="Presentational">
        <Clock
          initialMinutes={this.props.initialTime.minutes}
          initialSeconds={this.props.initialTime.seconds} />
      </div>
    )
  }
}

export default Presentational;
