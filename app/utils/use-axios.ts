import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
export const useAxios = () => {
  return axiosClient;
};
