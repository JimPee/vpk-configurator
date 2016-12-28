import * as actionTypes from '../actions/action-types';
import { CALL_API } from '../middleware/api';
import { prepareSelectionsForRequest } from '../utils/prepare-requests';

export function setBoxHasScores(hasScores) {
  return {
    type: actionTypes.SELECT_HAS_SCORES,
    payload: { hasScores },
  };
}

// get initial data
export function getAllSelections() {
  const endpoint = 'zvc_get_vals';

  return {
    [CALL_API]: {
      types: [
        actionTypes.SELECTIONS_REQUEST,
        actionTypes.SELECTIONS_SUCCESS,
        actionTypes.SELECTIONS_FAILURE,
      ],
      endpoint,
      errorMsg: 'failed to fetch selections',
    },
  };
}

// get current inputted/selected data and check with SAP
function _checkSelections(body) {
  const endpoint = 'zvc_check_val';

  return {
    [CALL_API]: {
      options: {
        method: 'post',
        body,
      },
      types: [
        actionTypes.CHECK_SELECTIONS_REQUEST,
        actionTypes.CHECK_SELECTIONS_SUCCESS,
        actionTypes.CHECK_SELECTIONS_FAILURE,
      ],
      endpoint,
      errorMsg: 'failed to check selections',
    },
  };
}

export function checkSelections() {
  return (dispatch, getState) => {
    const values = getState().selections.selections;
    const body = prepareSelectionsForRequest(values);
    return dispatch(_checkSelections(body));
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
