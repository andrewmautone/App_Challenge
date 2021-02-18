import axios from 'axios';

const ip = 'http://186.220.241.70:3003'

const api = axios.create({
    baseURL: ip,
    timeout: 1000,
   
  });
  api.interceptors.request.use((config) => {
    config.headers['Authorization'] ='Bearer '+ localStorage.getItem('token');
    return config;
  });

export default api;