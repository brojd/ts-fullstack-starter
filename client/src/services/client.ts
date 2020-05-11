import axios, { AxiosError } from 'axios';

const client = axios.create({
  baseURL: '/api'
});

client.interceptors.response.use(
  response => response.data,
  (error: AxiosError) => Promise.reject(error.response.data)
);

export default client;
