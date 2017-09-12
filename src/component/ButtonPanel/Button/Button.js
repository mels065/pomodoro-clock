import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <button
        id={`#${this.props.buttonLabel.split(/\s/).join('-')}-Btn`}
        onClick={this.props.clickHandler}>
          {this.props.buttonLabel}
      </button>
    );
  }
}

export default Button;
