import { combineReducers } from 'redux';
import PoliciesReducer from './reducer_policies';

const rootReducer = combineReducers({
  Policies: PoliciesReducer
});

export default rootReducer;
