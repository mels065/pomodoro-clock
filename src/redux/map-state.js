import {
  pomodoroSettingAction,
  shortBreakSettingAction,
  longBreakSettingAction
} from './action-creators';

function mapStateToProps(state) {
  return {
    initialMinutes: state.initialMinutes,
    initialSeconds: state.initialSeconds
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
    }
  };
}

export {
  mapStateToProps,
  mapDispatchToProps
};
