import { combineReducers } from 'redux';
import * as actionTypes from '../actions/action-types';

const initialState = {
  feedback: {},
  showSimulate: false,
  showCreate: false,
  simulateIsLoading: false,
};

function feedback(state = initialState.feedback, action) {
  switch (action.type) {
    case actionTypes.CHECK_DROPDOWNS_SUCCESS:
      return {};
    case actionTypes.SIMULATE_ORDER_REQUEST:
      return {};
    case actionTypes.SIMULATE_ORDER_SUCCESS:
      return action.payload.feedback;
    default:
      return state;
  }
}

function simulateIsLoading(state = initialState.simulateIsLoading, action) {
  switch (action.type) {
    case actionTypes.SIMULATE_ORDER_REQUEST:
      return true;
    case actionTypes.SIMULATE_ORDER_SUCCESS:
      return false;
    default:
      return state;
  }
}

function showSimulate(state = initialState.showSimulate, action) {
  switch (action.type) {
    case actionTypes.CHECK_DROPDOWNS_SUCCESS:
      if (action.payload.messages.length > 0) {
        return false;
      }
      return true;
    default:
      return state;
  }
}

function showCreate(state = initialState.showCreate, action) {
  switch (action.type) {
    case actionTypes.CHECK_DROPDOWNS_SUCCESS:
      return false;
    case actionTypes.SIMULATE_ORDER_SUCCESS:
      if (action.payload.feedback.rate !== '') {
        return true;
      }
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  feedback,
  showSimulate,
  showCreate,
  simulateIsLoading,
});
