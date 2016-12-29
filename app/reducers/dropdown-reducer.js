import { combineReducers } from 'redux';
import * as actionTypes from '../actions/action-types';
import _ from 'lodash'

const initialState = {
  dropdowns: [],
};

function dropdowns(state = initialState.dropdowns, action) {
  switch (action.type) {
    case actionTypes.DROPDOWNS_REQUEST:
      return [];
    case actionTypes.DROPDOWNS_SUCCESS:
      return action.payload.itab.map((dropdown) => {
        let result = dropdown;
        if (result.format === 'NUM' && !result.list && dropdown.default_val.length !== 0) {
          result = Object.assign({}, result, {
            value: dropdown.value === undefined ?
              dropdown.default_val[0].replace(/\./, '').replace(/,/, '.').match(/[0-9.,]*/)[0] :
              dropdown.value.replace(/\./, '').replace(/,/, '.').match(/[0-9.,]*/)[0],
            default_val: dropdown.default_val.length === 0 ?
              '' :
              dropdown.default_val[0].replace(/\./, '').replace(/,/, '.').match(/[0-9.,]*/)[0],
          });
        }
        if (dropdown.value === undefined && dropdown.default_val.length !== 0) {
          result = Object.assign({}, result, {
            value: result.default_val,
          });
        }
        return result;
      });
    case actionTypes.UPDATE_VALUE:
      return state.map((dropdown) => {
        if (dropdown.char === action.payload.id) {
          return Object.assign({}, dropdown, {
            value: action.payload.newValue,
          });
        }
        return dropdown;
      });
    case actionTypes.CHECK_DROPDOWNS_REQUEST:
      return state;
    case actionTypes.CHECK_DROPDOWNS_SUCCESS:
      return action.payload.values.map((dropdown) => {
        let result = dropdown;
        if (result.format === 'NUM' && !result.list && dropdown.default_val.length !== 0) {
          result = Object.assign({}, result, {
            value: dropdown.value === undefined ?
              dropdown.default_val[0].replace(/\./, '').replace(/,/, '.').match(/[0-9.,]*/)[0] :
              dropdown.value.replace(/\./, '').replace(/,/, '.').match(/[0-9.,]*/)[0],
            default_val: dropdown.default_val.length === 0 ?
              '' :
              dropdown.default_val[0].replace(/\./, '').replace(/,/, '.').match(/[0-9.,]*/)[0],
          });
        }
        if (dropdown.value === undefined && dropdown.default_val.length !== 0) {
          result = Object.assign({}, result, {
            value: result.default_val,
          });
        }
        return result;
      });
    case actionTypes.SELECT_HAS_SCORES:
      return state.map((dropdown) => {
        if (dropdown.char === 'FEFCO_SHEET') {
          return Object.assign({}, dropdown, {
            value: action.payload.hasScores ? dropdown.values[1].value : dropdown.values[0].value,
          });
        }
        return dropdown;
      });
    default:
      return state;
  }
}

function byId(state = initialState.dropdowns, action) {
  switch (action.type) {
    case actionTypes.DROPDOWNS_REQUEST:
      return {};
    case actionTypes.DROPDOWNS_SUCCESS: {
      return Object.assign([],
        state,
        action.payload.itab.reduce((obj, dropdown) => {
          obj[dropdown.char] = dropdown; // eslint-disable-line
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
    case actionTypes.DROPDOWNS_REQUEST:
      return true;
    case actionTypes.DROPDOWNS_SUCCESS:
    case actionTypes.DROPDOWNS_FAILURE:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  dropdowns,
  loading,
});
