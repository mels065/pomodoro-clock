import {
  POMODORO,
  SHORT_BREAK,
  LONG_BREAK,
  START,
  STOP,
  RESET,
  UPDATE_FINISHED,
  RESET_FINISHED,
} from '../utils/constants';

function pomodoroSettingAction() {
  return {
    type: POMODORO,
    minutes: 25,
    seconds: 0
  };
}

function shortBreakSettingAction() {
  return {
    type: SHORT_BREAK,
    minutes: 5,
    seconds: 0
  };
}

function longBreakSettingAction() {
  return {
    type: LONG_BREAK,
    minutes: 10,
    seconds: 0
  };
}

function updateFinishedAction() {
  return {
    type: UPDATE_FINISHED
  };
}

function startAction(cb) {
  return {
    type: START,
    cb
  };
}

function stopAction() {
  return {
    type: STOP
  };
}

function resetAction() {
  return {
    type: RESET
  };
}

function resetFinishedAction() {
  return {
    type: RESET_FINISHED
  };
}

export {
  pomodoroSettingAction,
  shortBreakSettingAction,
  longBreakSettingAction,
  updateFinishedAction,
  startAction,
  stopAction,
  resetAction,
  resetFinishedAction
};
