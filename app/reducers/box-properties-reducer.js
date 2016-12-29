import { combineReducers } from 'redux';
import * as actionTypes from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  hasScores: true,
  scores: [],
  fefcoSheet: '800',
};

function hasScores(state = initialState.hasScores, action) {
  switch (action.type) {
    case actionTypes.SELECT_HAS_SCORES:
      return action.payload.hasScores;
    default:
      return state;
  }
}

function scores(state = initialState.scores, action) {
  switch (action.type) {
    case actionTypes.SET_BOX_SCORES:
      return action.payload.scores;
    default:
      return state;
  }
}

function fefcosheet(state = initialState.fefcoSheet, action) {
  switch (action.type) {
    case actionTypes.SET__BOX_FEFCOSHEET:
      return action.payload.fefcosheet;
    default:
      return state;
  }
}

export default combineReducers({
  hasScores,
  scores,
  fefcosheet,
});
