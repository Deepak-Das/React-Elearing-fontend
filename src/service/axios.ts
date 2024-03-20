import axios from "axios";

export const BASE_URL = "http://localhost:9090/api";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
