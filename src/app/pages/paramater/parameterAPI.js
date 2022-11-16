const axios = require("axios").default;

const URL = `${process.env.REACT_APP_API_URL}/param`;
const URL_PARAMGROUP = `${process.env.REACT_APP_API_URL}/paramgroup`;


export const getAll = (payload) => {
  return axios.get(URL, {
    params: payload,
  });
};

export const createItem = (payload) => {
  return axios.post(URL, payload);
};

export const updateItem = (payload, id) => {
  return axios.put(`${URL}/${id}`, payload);
};

export const deleteById = (id) => {
  return axios.delete(`${URL}/${id}`);
};
export const getParamGroup = (payload) => {
  return axios.get(URL_PARAMGROUP, {
    params: payload,
  });
};
