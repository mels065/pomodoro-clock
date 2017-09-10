import {
  POMODORO,
  SHORT_BREAK,
  LONG_BREAK
} from '../utils/constants';

function pomodoroSettingAction() {
  return {
    type: POMODORO,
    initialMinutes: 25,
    initialSeconds: 0
  };
}

function shortBreakSettingAction() {
  return {
    type: SHORT_BREAK,
    initialMinutes: 5,
    initialSeconds: 0
  };
}

function longBreakSettingAction() {
  return {
    type: LONG_BREAK,
    initialMinutes: 10,
    initialSeconds: 0
  };
}

export {
  pomodoroSettingAction,
  shortBreakSettingAction,
  longBreakSettingAction
};
