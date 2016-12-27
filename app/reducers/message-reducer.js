import { combineReducers } from 'redux';
import * as actionTypes from '../actions/action-types';

const initialState = {
  checkMessages: [],
  simulateMessages: [],
  createMessages: [],
};

function checkMessages(state = initialState.checkMessages, action) {
  switch (action.type) {
    case actionTypes.CHECK_SELECTIONS_REQUEST:
      return state;
    case actionTypes.CHECK_SELECTIONS_SUCCESS:
      return action.payload.messages;
    default:
      return state;
  }
}

function simulateMessages(state = initialState.simulateMessages, action) {
  switch (action.type) {
    case actionTypes.CHECK_SELECTIONS_SUCCESS:
      return [];
    case actionTypes.SIMULATE_ORDER_REQUEST:
      return state;
    case actionTypes.SIMULATE_ORDER_SUCCESS:
      return action.payload.messages;
    default:
      return state;
  }
}

function createMessages(state = initialState.createMessages, action) {
  switch (action.type) {
    case actionTypes.CHECK_SELECTIONS_SUCCESS:
      return [];
    case actionTypes.CREATE_ORDER_REQUEST:
      return state;
    case actionTypes.CREATE_ORDER_SUCCESS:
      return action.payload.messages;
    default:
      return state;
  }
}

export default combineReducers({
  checkMessages,
  simulateMessages,
  createMessages,
});
