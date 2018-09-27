import { combineReducers } from 'redux';
import user from './reducers/user';
import procese from './reducers/procese';
import chitante from './reducers/chitante';
import controlori from './reducers/controlori';

export default combineReducers({
  user,
  procese,
  chitante,
  controlori
})
