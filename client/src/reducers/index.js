import _ from 'lodash';
import { combineReducers } from 'redux';
import { FETCH_USER } from '../actions/types';

const AUTH_INITIAL_STATE = {
  user: null,
  isSignedIn: null,
};

const auth = (state = AUTH_INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      const user = _.pick(action.payload, 'id', 'googleId', 'credits');
      return { ...state, user, isSignedIn: !_.isEmpty(user) };
    default:
      return state;
  }
};

export default combineReducers({
  auth,
});
