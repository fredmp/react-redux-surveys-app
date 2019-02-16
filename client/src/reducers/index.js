import _ from 'lodash';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { FETCH_USER, FETCH_SURVEYS } from '../actions/types';

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

const surveys = (state = [], action) => {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  auth,
  form,
  surveys,
});
