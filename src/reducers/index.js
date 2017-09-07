import { combineReducers } from 'redux';
import PoliciesReducer from './reducer_policies';
import PolicyReducer from './reducer_active_policy';

const rootReducer = combineReducers({
  policies: PoliciesReducer,
  activePolicy: PolicyReducer
});

export default rootReducer;
