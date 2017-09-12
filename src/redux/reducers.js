import {combineReducers} from 'redux';

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

function timeSettingReducer(state = {
                                      minutes: 25,
                                      seconds: 0,
                                      updating: false
                                    }, action) {
  switch(action.type) {
    case POMODORO:
    case SHORT_BREAK:
    case LONG_BREAK:
      return {
        minutes: action.minutes,
        seconds: action.seconds,
        updating: true
      };
    case UPDATE_FINISHED:
      return {
        minutes: state.minutes,
        seconds: state.seconds,
        updating: false
      };
    default:
      return state;
  }
}

function timeControlReducer(state = {
                                      ticking: false,
                                      resetting: false,
                                      clockId: null
                                    }, action) {
  switch(action.type) {
    case START:
      if (state.ticking) return state
      return {
        ticking: true,
        resetting: false,
        clockId: setInterval(action.cb, 1000)
      };
    case STOP:
    case RESET_FINISHED:
      clearInterval(state.clockId);
      return {
        ticking: false,
        resetting: false,
        clockId: null
      };
    case RESET:
      clearInterval(state.clockId);
      return {
        ticking: false,
        resetting: true,
        clockId: null
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  timeSetting: timeSettingReducer,
  timeControl: timeControlReducer
});

export default rootReducer;
