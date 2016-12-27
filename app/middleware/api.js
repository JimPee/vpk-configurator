import fetch from 'isomorphic-fetch';

export const CALL_API = Symbol('Call API');

const backendUrlTail = '?sap-client=400';
const API_URL = 'http://svbe-dev01.vpkgrp.int:8000/sap/bc';
function callApi(endpoint, options, delay = 0) {
  let finalUrl = API_URL;
  if (endpoint.charAt(0) === '/') {
    finalUrl += endpoint + backendUrlTail;
  } else {
    finalUrl += `/${endpoint}${backendUrlTail}`;
  }

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300 || response.status === 400) {
      return response;
    }
    return response.json().then(err => Promise.reject(err));
  }

/*
  function handleAuthentication() {
    function addAuthHeader(token) {
      return {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }

    return authManager.getToken().then(
      token => addAuthHeader(token),
      err => Promise.reject(err)
    );
  }
*/
  return fetch(finalUrl, options)
    .then(checkStatus)
    .then(res =>
      new Promise(resolve => {
        setTimeout(() => resolve(res.json()), delay);
      })
    )
    .catch(err => Promise.reject(err));
}


export default store => next => action => { // eslint-disable-line no-unused-vars
  const callAPI = action[CALL_API];
  // when call_api symbol is not defined, just call the next middleware
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const defaultOptions = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Accept': 'text/plain',
      'content-type': 'text/plain',
    },
    credentials: 'same-origin', // sent cookies
  };

  const { endpoint, types, errorMsg, options, extraActions, delay } = callAPI;

  if (typeof endpoint !== 'string' && !Array.isArray(endpoint)) {
    throw new Error('API middleware - Specify a string URL or array of endpoints');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('API middleware - Expected an array of three action types');
  }
  if (!types.every(t => {
    if (typeof t === 'string') {
      return true;
    } else if (typeof t === 'object' && typeof t.type === 'string') {
      return true;
    }
    return false;
  })) {
    throw new Error('API middleware - Expected action types to be string or object with type property');
  }
  if (delay && typeof delay !== 'number') {
    throw new Error('API middleware - Specify a number for delay');
  }

  const mergedOptions = Object.assign({}, defaultOptions, options);
  const [requestType, successType, failureType] = types;

  const requestAction = {};
  if (typeof requestType === 'string') {
    requestAction.type = requestType;
  }
  if (typeof requestType === 'object') {
    requestAction.type = requestType.type;
    requestAction.payload = requestType.payload;
  }

  if (mergedOptions.method === 'post') {
    if (!mergedOptions.body) {
      throw new Error('API middleware - body attribute required.');
    } else {
      mergedOptions.body = JSON.stringify(mergedOptions.body);
    }
  }

  function createActionObj(data) {
    const finalAction = Object.assign({}, action, data);
    // delete the symbol key
    delete finalAction[CALL_API];
    return finalAction;
  }

  function handleApiSuccess(res) {
    if (res.isError) {
      next(createActionObj({
        type: failureType,
        error: true,
        payload: res,
        errorMsg,
      }));
    } else {
      next(createActionObj({
        payload: res,
        type: successType,
      }));
    }
    // dispatch additional actions
    if (extraActions && extraActions.length) {
      extraActions.forEach(extraAction => next(extraAction()));
    }
    return res;
  }

  function handleApiFailure(err) {
    /* TODO
    window.Rollbar.error(errorMsg, { ...err });
    */
    next(createActionObj({
      type: failureType,
      error: true,
      payload: err,
      errorMsg,
    }));
    /*
    next(showModal({
      modalType: 'ERROR',
      modalProps: {
        errorMessage: errorMsg,
        info: err.Message,
      },
    }));
    */
    return Promise.reject(err);
  }

  next(createActionObj(requestAction));

  if (Array.isArray(endpoint)) {
    return Promise.all(endpoint.map(ep => callApi(ep, mergedOptions, delay)))
      .then(handleApiSuccess, handleApiFailure);
  }

  return callApi(endpoint, mergedOptions, delay).then(handleApiSuccess, handleApiFailure);
};
