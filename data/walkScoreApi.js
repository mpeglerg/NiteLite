let api = "https://api.walkscore.com/";
const API_KEY = process.env.REACT_APP_WALK_SCORE_API;

const apiHost = host => {
    api = host;
};
const urlFor = resource => `${api}${resource}`;
const HTTP_OK = 200;
const throwResponseError = response => {
const error = new Error(response.statusText);
error.response = response;
throw error;
};
const emitNativeError = error => {
throw error;
};
const statusCheck = successStatuses => response => {
if (successStatuses.includes(response.status)) {
    return response;
} else {
    throwResponseError(response);
}
};
const okCheck = statusCheck([HTTP_OK]);
const query = (resource, params) =>
    fetch(`${urlFor(resource)}?format=json&lat=${params.latitude}&lon=${params.longitude}&wsapikey=${API_KEY}`)
        .then(okCheck, emitNativeError)
        .then(response => response.json());
const getScore = params => {
    return query(`score`, params);
};

export {
    apiHost,
    getScore
};