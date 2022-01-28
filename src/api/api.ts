import axios from 'axios';

export const url = process.env.SERVER_URL || 'http://localhost:5000/';

const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    'Content-type': 'application/json',
  },
});

export default axiosInstance;
