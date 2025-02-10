import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
console.log(process.env.NEXT_PUBLIC_BASE_URL, "bcd");
export const useAxios = () => {
  return axiosClient;
};
