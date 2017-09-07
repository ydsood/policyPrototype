import FETCH_POLICY from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
      case FETCH_POLICY:
        return action.payload;
      default:
        return state
    }
  }