import axios from 'axios';

export const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`;

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default api;
