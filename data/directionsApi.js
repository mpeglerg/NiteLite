let api = "https://maps.googleapis.com/";
const API_KEY = "AIzaSyDXj6OqzRzxbs2nFT5V6N67Tf3QsPY69nY";

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
const paramsWithApiKey = params => {
    const result = new URLSearchParams(params);
    result.set("key", API_KEY);
    return result;
};
const query = (resource, params) =>
    fetch(`${urlFor(resource)}?${paramsWithApiKey(params)}`)
        .then(okCheck, emitNativeError)
        .then(response => response.json());
const getDirections = params => {
    return query(`maps/api/directions/json`, params);
};

export {
    apiHost,
    getDirections
};