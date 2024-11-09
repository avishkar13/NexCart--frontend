import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://nexcart-backend.vercel.app/',  
});

// Add a request interceptor to set the Authorization header dynamically
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get the latest token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
