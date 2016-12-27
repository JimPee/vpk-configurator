import * as actionTypes from './action-types';

export function showLoadingModal() {
  return { type: actionTypes.SHOW_LOADING_MODAL };
}

export function hideLoadingModal() {
  return { type: actionTypes.HIDE_LOADING_MODAL };
}
