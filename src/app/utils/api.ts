import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

AxiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosInstance;
