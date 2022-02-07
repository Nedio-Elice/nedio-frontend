import axios from 'axios';

export const url = process.env.SERVER_URL || 'http://localhost:4000/api/';

const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    'Content-type': 'application/json',
  },
});

export default axiosInstance;
