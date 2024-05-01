import axios from 'axios';

export const API_URL = import.meta.env.VITE_BASE_API_URL;

const http = axios.create({
  baseURL: API_URL,
});

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response
    return Promise.reject(error);
  }
);

export default http;
