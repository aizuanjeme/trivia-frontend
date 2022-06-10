import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

export const API_ROOT = 'http://127.0.0.1:5000/';  //LOCAL SERVER

const responseBody = res => res.body;


const requests = {
    del: url =>
        superagent.del(`${API_ROOT}${url}`).then(responseBody),
    get: url =>
        superagent.get(`${API_ROOT}${url}`).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).then(responseBody),
    patch: (url, body) =>
        superagent.patch(`${API_ROOT}${url}`, body).then(responseBody)
};


const Question = {
    save: (data) =>
        requests.post(`questions`, data),
    rate: (id, data) =>
        requests.patch(`questions/${id}`, data),
    load: (page) =>
        requests.get(`questions?page=${page}`)
}
const Catergory = {
    save: (data) =>
        requests.post(`categories`, data),
    load: () =>
        requests.get(`categories`),
    loadQuestionById: (id) =>
        requests.get(`categories/${id}/questions`)
}

const api = {
    Question,
    Catergory,
}

export default api;