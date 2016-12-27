function getQueryParam(key, value) {
  if (Array.isArray(value) && value.length) {
    return `${key}=${value.join()}`;
  } else if (!Array.isArray(value) && value) {
    return `${key}=${value}`;
  }
  return '';
}

export default function getQueryParameters(params) {
  return Object.keys(params)
    .map(key => getQueryParam(key, params[key]))
    .filter(p => p)
    .join('&');
}
