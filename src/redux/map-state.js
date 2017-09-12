import {
  pomodoroSettingAction,
  shortBreakSettingAction,
  longBreakSettingAction,
  updateFinishedAction,
  startAction,
  stopAction,
  resetAction,
  resetFinishedAction
} from './action-creators';

function mapStateToProps(state) {
  return {
    initialMinutes: state.timeSetting.minutes,
    initialSeconds: state.timeSetting.seconds,
    updating: state.timeSetting.updating,
    ticking: state.timeControl.ticking,
    resetting: state.timeControl.resetting
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pomodoroSetting: () => {
      dispatch(pomodoroSettingAction());
    },
    shortBreakSetting: () => {
      dispatch(shortBreakSettingAction());
    },
    longBreakSetting: () => {
      dispatch(longBreakSettingAction());
    },
    updateFinishedSetting: () => {
      dispatch(updateFinishedAction());
    },
    startControl: (cb) => {
      dispatch(startAction(cb));
    },
    stopControl: () => {
      dispatch(stopAction());
    },
    resetControl: () => {
      dispatch(resetAction());
    },
    resetFinishedControl: () => {
      dispatch(resetFinishedAction());
    }
  };
}

export {
  mapStateToProps,
  mapDispatchToProps
};
