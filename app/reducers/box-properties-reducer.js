import { combineReducers } from 'redux';
import * as actionTypes from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  hasScores: true,
};

function hasScores(state = initialState.hasScores, action) {
  switch (action.type) {
    case actionTypes.SELECT_HAS_SCORES:
      return action.payload.hasScores;
    default:
      return state;
  }
}

export default combineReducers({
  hasScores,
});
