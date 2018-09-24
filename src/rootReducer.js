import { combineReducers } from 'redux';
import user from './reducers/user';
import procese from './reducers/procese';

export default combineReducers({
  user,
  procese
})
