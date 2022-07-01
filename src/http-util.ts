import Axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = Axios.create({
  baseURL: "http://api.deezer.com",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
