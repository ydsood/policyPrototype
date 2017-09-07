import FETCH_POLICIES from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
      case FETCH_POLICIES:
        return state;
      default:
        return state
    }
  }