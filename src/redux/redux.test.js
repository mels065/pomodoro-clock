import sinon from 'sinon';

import reducer from './reducers';
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
import {
  POMODORO,
  SHORT_BREAK,
  LONG_BREAK,
  START,
  STOP,
  RESET,
  UPDATE_FINISHED,
  RESET_FINISHED
} from '../utils/constants';

describe('action creators', () => {
  describe('setting action', () => {
    it('should create an action to set the time to a Pomodoro clock', () => {
      const action = pomodoroSettingAction();
      expect(action).toEqual({
        type: POMODORO,
        minutes: 25,
        seconds: 0
      });
    });
    it('should create an action to set the time to a Short Break clock', () => {
      const action = shortBreakSettingAction();
      expect(action).toEqual({
        type: SHORT_BREAK,
        minutes: 5,
        seconds: 0
      });
    });
    it('should create an action to set the time to a Long Break clock', () => {
      const action = longBreakSettingAction();
      expect(action).toEqual({
        type: LONG_BREAK,
        minutes: 10,
        seconds: 0
      });
    });
    it('should create an action to indicate that the initial time is done updating', () => {
      const action = updateFinishedAction();
      expect(action).toEqual({
        type: UPDATE_FINISHED,
      });
    });
  });

  describe('control action', () => {
    it ('should create an action that starts the clock', () => {
      const foo = function() {};
      const action = startAction(foo)
      expect(action).toEqual({
        type: START,
        cb: foo
      })
    });
    it('should create an action that stops the clock', () => {
      const action = stopAction();
      expect(action).toEqual({
        type: STOP
      });
    });
    it('should create an action that resets the clock', () => {
      const action = resetAction();
      expect(action).toEqual({
        type: RESET
      });
    });
    it('should create an action that triggers when the clock is done resetting', () => {
      const action = resetFinishedAction();
      expect(action).toEqual({
        type: RESET_FINISHED
      });
    })
  })
})

describe('reducer', () => {
  it('returns an object for the state', () => {
    const result = reducer(undefined, pomodoroSettingAction());
    expect(typeof result).toBe("object");
  });

  it('returns correct time for POMODORO setting', () => {
    const result = reducer(undefined, pomodoroSettingAction());
    expect(result.timeSetting.minutes).toEqual(25);
    expect(result.timeSetting.seconds).toEqual(0);
  });

  it('returns correct time for SHORT_BREAK setting', () => {
    const result = reducer(undefined, shortBreakSettingAction());
    expect(result.timeSetting.minutes).toEqual(5);
    expect(result.timeSetting.seconds).toEqual(0);
  });

  it('returns correct time for LONG_BREAK setting', () => {
    const result = reducer(undefined, longBreakSettingAction());
    expect(result.timeSetting.minutes).toEqual(10);
    expect(result.timeSetting.seconds).toEqual(0);
  });

  it('sends a boolean that indicates to update when using the time setting actions', () => {
    let state = reducer(undefined, pomodoroSettingAction());
    expect(state.timeSetting.updating).toBe(true);
    state = reducer(undefined, updateFinishedAction());
    expect(state.timeSetting.updating).toBe(false);
  });

  it('starts and stops a timer when given START and STOP actions respectively', () => {
    var clock = sinon.useFakeTimers();
    var cb = sinon.spy();
    const state = reducer(undefined, startAction(cb));

    clock.tick(1000);
    expect(cb.called).toBe(true);
    reducer(undefined, stopAction());
    clock.restore();
  });

  it('sends a boolean that indicates to reset when using RESET action', () => {
    let state = reducer(undefined, resetAction());
    expect(state.timeControl.resetting).toBe(true);
    state = reducer(undefined, resetFinishedAction());
    expect(state.timeControl.resetting).toBe(false);
  });
});
