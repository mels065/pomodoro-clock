import {combineReducers} from 'redux';

import {
  POMODORO,
  SHORT_BREAK,
  LONG_BREAK
} from '../utils/constants';

function timeSettingReducer(state = {
                                      minutes: 25,
                                      seconds: 0
                                    }, action) {
  switch(action.type) {
    case POMODORO:
    case SHORT_BREAK:
    case LONG_BREAK:
      return {
        minutes: action.minutes,
        seconds: action.seconds
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  timeSetting: timeSettingReducer
});

export default rootReducer;
