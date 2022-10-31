import axios from "axios";
let config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
}
export const AxiosInstance = axios.create(config);
console.log("AXIOS AxiosInstance", AxiosInstance);
