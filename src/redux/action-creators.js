import {
  POMODORO,
  SHORT_BREAK,
  LONG_BREAK
} from '../utils/constants';

function pomodoroSettingAction = () => {
  return {
    type: POMODORO,
    minutes: 25,
    seconds: 0
  };
}

function shortBreakSettingAction = () => {
  return {
    type: SHORT_BREAK,
    minutes: 5,
    seconds: 0
  };
}

function longBreakSettingAction = () => {
  return {
    type: LONG_BREAK,
    minutes: 10,
    seconds: 0
  };
}
