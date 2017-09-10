import {combineReducers} from 'redux';

import {
  POMODORO,
  SHORT_BREAK,
  LONG_BREAK
} from '../utils/constants';

function timeSettingReducer(state = {
                                      initialMinutes: 25,
                                      initialSeconds: 0
                                    }, action) {
  switch(action.type) {
    case POMODORO:
    case SHORT_BREAK:
    case LONG_BREAK:
      return {
        initialMinutes: action.initialMinutes,
        initialSeconds: action.initialSeconds
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  timeSetting: timeSettingReducer
});

export default rootReducer;
