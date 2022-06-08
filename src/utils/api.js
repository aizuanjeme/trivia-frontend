import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

export const API_ROOT = 'http://127.0.0.1:5000/';  //LOCAL SERVER

const responseBody = res => res.body;


const requests = {
    del: url =>
        superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    get: url =>
        superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    patch: (url, body) =>
        superagent.patch(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};


const Question = {
    save: (data) =>
        requests.post(`questions`, data),
    // load: () =>
    //     requests.get(`blogs`)
}
const Catergory = {
    // save: (data) =>
    //     requests.post(`blogs`, data),
    // load: () =>
    //     requests.get(`blogs`)
}

const api = {
    Question,
    Catergory,
}

export default api;