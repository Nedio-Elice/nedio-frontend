import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
  ignoreCache: true,
});

export const url =
  process.env.REACT_APP_SERVER_URL || 'http://localhost:4000/api';

export const axiosInstanceFormData = axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'multipart/form-data' },
});

const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 10000,
  adapter: cache.adapter,
});
axiosInstance.defaults.withCredentials = true;

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.message === 'Network Error') return console.log('NETWORK ERROR');

    const {
      config,
      response: { status },
    } = error;
    const originalRequest = config;

    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (
        error.response.data.message ===
        '만료나 유효하지 않는 토큰 처리할 때(의견나눠야함)'
      ) {
        // token setting
        // axiosInstance.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        // originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
