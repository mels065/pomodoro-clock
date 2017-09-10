import store from './store';
import {
  pomodoroSettingAction,
  shortBreakSettingAction,
  longBreakSettingAction
} from './action-creators';

describe('redux store', () => {
  it('returns an object for the state', () => {
    const result = store.dispatch(pomodoroSettingAction());
    expect(typeof result).toBe("object");
  });

  it('returns correct time for POMODORO setting', () => {
    const result = store.dispatch(pomodoroSettingAction());
    expect(result.minutes).toEqual(25);
    expect(result.seconds).toEqual(0);
  });

  it('returns correct time for SHORT_BREAK setting', () => {
    const result = store.dispatch(shortBreakSettingAction());
    expect(result.minutes).toEqual(5);
    expect(result.seconds).toEqual(0);
  });

  it('returns correct time for LONG_BREAK setting', () => {
    const result = store.dispatch(longBreakSettingAction());
    expect(result.minutes).toEqual(10);
    expect(result.seconds).toEqual(0);
  });
});
