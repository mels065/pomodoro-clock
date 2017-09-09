import {
  POMODORO,
  SHORT_BREAK,
  LONG_BREAK
} from '../utils/constants';

function pomodoroTimeAction = () => {
  return {
    type: POMODORO,
    minutes: 25,
    seconds: 0
  };
}

function shortBreakTimeAction = () => {
  return {
    type: SHORT_BREAK,
    minutes: 5,
    seconds: 0
  };
}

function longBreakTimeAction = () => {
  return {
    type: LONG_BREAK,
    minutes: 10,
    seconds: 0
  };
}
