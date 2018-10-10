import { combineReducers } from 'redux-immutable';
import { reducer as HomeReducer } from '../pages/Home/store';

const reducer = combineReducers({
  home: HomeReducer
});

export default reducer;
