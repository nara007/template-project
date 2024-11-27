import axios from 'axios';

// import { TIMEOUT } from '../constants/constants';
import { HttpStatusCode } from '../types/common';

const http = axios.create({
  baseURL: 'https://ubique.img.ly/',
  timeout: 10000,
});

http.interceptors.request.use(
  (config) => {
    //TODO: configure authentication token.
    return config;
  },
  (error) => {
    //TODO: handle request errors.
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response) => {
    if (response.status === HttpStatusCode.OK) return response;
    return Promise.reject(new Error(`Error status code ${response.status}`));
  },
  (error) => {
    console.log('err' + error);
    return Promise.reject(error);
  },
);

export default http;
