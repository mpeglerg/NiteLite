let api = "https://api.walkscore.com/";
const API_KEY = "8da8eaf8f825124f0ffed61606d080aa";

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
    result.set("wsapikey", API_KEY);
    return result;
};
const query = (resource, params) =>
    fetch(`${urlFor(resource)}?${paramsWithApiKey(params)}`)
        .then(okCheck, emitNativeError)
        .then(response => response.json());
const getScore = params => {
    return query(`score`, params);
};

export {
    apiHost,
    getScore
};