import axios from "axios";
import queryString from "query-string";
import { getToken } from "../utils/Common";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const token = await getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
