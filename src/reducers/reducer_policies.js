import FETCH_POLICIES from '../actions';

export default function(state = [], action) {
    switch (action.type) {
      case FETCH_POLICIES:
        console.log(action);
        action.callback();
        return action.payload.data;
      default:
        return state
    }
  }