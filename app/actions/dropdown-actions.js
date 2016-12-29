import * as actionTypes from '../actions/action-types';
import { CALL_API } from '../middleware/api';
import { prepareDropdownsForRequest } from '../utils/prepare-requests';

export function setBoxHasScores(hasScores) {
  return {
    type: actionTypes.SELECT_HAS_SCORES,
    payload: { hasScores },
  };
}

export function setBoxScores(scores) {
  return {
    type: actionTypes.SET_BOX_SCORES,
    payload: { scores },
  };
}

export function setFefcosheet(fefcosheet) {
  return {
    type: actionTypes.SET__BOX_FEFCOSHEET,
    payload: { fefcosheet },
  };
}

// get initial data
export function getAllDropdowns() {
  const endpoint = 'zvc_get_vals';

  return {
    [CALL_API]: {
      types: [
        actionTypes.DROPDOWNS_REQUEST,
        actionTypes.DROPDOWNS_SUCCESS,
        actionTypes.DROPDOWNS_FAILURE,
      ],
      endpoint,
      errorMsg: 'failed to fetch dropdowns',
    },
  };
}

// get current inputted/selected data and check with SAP
function _checkDropdowns(body) {
  const endpoint = 'zvc_check_val';

  return {
    [CALL_API]: {
      options: {
        method: 'post',
        body,
      },
      types: [
        actionTypes.CHECK_DROPDOWNS_REQUEST,
        actionTypes.CHECK_DROPDOWNS_SUCCESS,
        actionTypes.CHECK_DROPDOWNS_FAILURE,
      ],
      endpoint,
      errorMsg: 'failed to check dropdowns',
    },
  };
}

export function checkDropdowns() {
  return (dispatch, getState) => {
    const values = getState().dropdowns.dropdowns;
    const body = prepareDropdownsForRequest(values);
    return dispatch(_checkDropdowns(body));
  };
}

export function updateValue(id, newValue) {
  return {
    type: 'UPDATE_VALUE',
    payload: {
      id,
      newValue,
    },
  };
}
