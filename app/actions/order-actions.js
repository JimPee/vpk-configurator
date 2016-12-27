import * as actionTypes from '../actions/action-types';
import { CALL_API } from '../middleware/api';
import { prepareSelectionsForRequest } from '../utils/prepare-requests';

function _orderSimulate(body) {
  const endpoint = 'zvc_sim_ord';
  return {
    [CALL_API]: {
      options: {
        method: 'post',
        body,
      },
      types: [
        actionTypes.SIMULATE_ORDER_REQUEST,
        actionTypes.SIMULATE_ORDER_SUCCESS,
        actionTypes.SIMULATE_ORDER_FAILURE,
      ],
      endpoint,
      errorMsg: 'failed to simulate order',
    },
  };
}

export function orderSimulate() {
  return (dispatch, getState) => {
    const values = getState().selections.selections;
    const body = prepareSelectionsForRequest(values);
    return dispatch(_orderSimulate(body));
  };
}

function _orderCreate(body) {
  const endpoint = 'zvc_crea_ord';

  return {
    [CALL_API]: {
      options: {
        method: 'post',
        body,
      },
      types: [
        actionTypes.CREATE_ORDER_REQUEST,
        actionTypes.CREATE_ORDER_SUCCESS,
        actionTypes.CREATE_ORDER_FAILURE,
      ],
      endpoint,
      errorMsg: 'failed to create order',
    },
  };
}

export function orderCreate() {
  return (dispatch, getState) => {
    const values = getState().selections.selections;
    const body = prepareSelectionsForRequest(values);
    return dispatch(_orderCreate(body));
  };
}
