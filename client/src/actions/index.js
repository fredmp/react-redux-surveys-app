import Axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const response = await Axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const sendStripeToken = token => async dispatch => {
  const response = await Axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const submitSurvey = (survey, history) => async dispatch => {
  const response = await Axios.post('/api/surveys', survey);
  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: response.data });
};
