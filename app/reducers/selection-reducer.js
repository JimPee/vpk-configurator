import { combineReducers } from 'redux';
import * as actionTypes from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  selections: [],
};


function selections(state = initialState.selections, action) {
  switch (action.type) {
    case actionTypes.SELECTIONS_REQUEST:
      return [];
    case actionTypes.SELECTIONS_SUCCESS:
      return action.payload.itab.map((selection) => {
        let result = selection;
        if (result.format === 'NUM' && !result.list && selection.default_val.length !== 0) {
          result = Object.assign({}, result, {
            value: selection.value === undefined ?
              selection.default_val[0].replace(/\./, '').replace(/,/, '.').match(/[0-9.,]*/)[0] :
              selection.value.replace(/\./, '').replace(/,/, '.').match(/[0-9.,]*/)[0],
            default_val: selection.default_val.length === 0 ?
              '' :
              selection.default_val[0].replace(/\./, '').replace(/,/, '.').match(/[0-9.,]*/)[0],
          });
        }
        if (selection.value === undefined && selection.default_val.length !== 0) {
          result = Object.assign({}, result, {
            value: result.default_val,
          });
        }
        return result;
      });
    case actionTypes.UPDATE_VALUE:
      return state.map((selection) => {
        if (selection.char === action.payload.id) {
          return Object.assign({}, selection, {
            value: action.payload.newValue,
          });
        }
        return selection;
      });
    case actionTypes.CHECK_SELECTIONS_REQUEST:
      return state;
    case actionTypes.CHECK_SELECTIONS_SUCCESS:
    /*
      return state.map(value => {
        const values = value.values;
        let match;
        action.payload.values.forEach(current => {
          if (current.char === value.char) {
            match = current;
          }
        });
        // check each value to check if it still has to be showed
        for (let i = 0; i < values.length; i++) {
          const currentVal = values[i];
          let checker;
          match.values.forEach(pos => {
            if (pos.value === currentVal.value) {
              checker = pos;
            }
          });
          if (checker === undefined) {
            currentVal.hide = true;
          } else {
            currentVal.hide = false;
          }
        }
        return Object.assign(value, {
          default_val: match.default_val,
          values,
        });
      });
      */
      return action.payload.values.map((selection) => {
        let result = selection;
        if (result.format === 'NUM' && !result.list && selection.default_val.length !== 0) {
          result = Object.assign({}, result, {
            value: selection.value === undefined ?
              selection.default_val[0].replace(/\./, '').replace(/,/, '.').match(/[0-9.,]*/)[0] :
              selection.value.replace(/\./, '').replace(/,/, '.').match(/[0-9.,]*/)[0],
            default_val: selection.default_val.length === 0 ?
              '' :
              selection.default_val[0].replace(/\./, '').replace(/,/, '.').match(/[0-9.,]*/)[0],
          });
        }
        if (selection.value === undefined && selection.default_val.length !== 0) {
          result = Object.assign({}, result, {
            value: result.default_val,
          });
        }
        return result;
      });
    default:
      return state;
  }
}

function byId(state = initialState.selections, action) {
  switch (action.type) {
    case actionTypes.SELECTIONS_REQUEST:
      return {};
    case actionTypes.SELECTIONS_SUCCESS: {
      return Object.assign([],
        state,
        action.payload.itab.reduce((obj, selection) => {
          obj[selection.char] = selection; // eslint-disable-line
          return obj;
        }, {})
      );
    }
    default:
      return state;
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case actionTypes.SELECTIONS_REQUEST:
      return true;
    case actionTypes.SELECTIONS_SUCCESS:
    case actionTypes.SELECTIONS_FAILURE:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  selections,
  loading,
});
