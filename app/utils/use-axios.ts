import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosClient.interceptors.request.use(
  (config) => {
    // Request interceptor logic here
    return config;
  },
  (error) => {
    // Request error logic here
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    // Response interceptor logic here
    return response;
  },
  (error) => {
    // Response error logic here
    return Promise.reject(error);
  }
);

export const useAxios = () => {
  return axiosClient;
};
