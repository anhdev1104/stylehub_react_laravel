import axios from 'axios';

export const API_URL = import.meta.env.VITE_BASE_API_URL;

class Http {
  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      timeout: 10000,
    });

    // Add a response interceptor
    this.api.interceptors.response.use(
      function (response) {
        return response.data;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  async get(url) {
    try {
      const response = await this.api.get(url);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async post(url, data, config = {}) {
    try {
      const response = await this.api.post(url, data, config);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async put(url, data, config = {}) {
    try {
      const response = await this.api.put(url, data, config);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async patch(url, data, config = {}) {
    try {
      const response = await this.api.patch(url, data, config);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async delete(url) {
    try {
      const response = await this.api.delete(url);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
}

export default Http;
