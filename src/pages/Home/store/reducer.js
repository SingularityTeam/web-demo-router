import { fromJS } from 'immutable';
import { constants } from '.';

const defaultState = fromJS({
  isCollapsed: false,
  keyPath: null
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_COLLAPSED:
      return state.set('isCollapsed', !state.get('isCollapsed'));
    case constants.CHANGE_KEYPATH:
      return state.set('keyPath', action.keyPath);
    default:
      return state;
  }
};
