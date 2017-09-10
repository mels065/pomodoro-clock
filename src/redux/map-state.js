import {
  pomodoroSettingAction,
  shortBreakSettingAction,
  longBreakSettingAction
} from './action-creators';

function mapStateToProps(state) {
  return {
    initialTime: state.timeSetting
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
