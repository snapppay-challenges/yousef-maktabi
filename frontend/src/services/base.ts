import axios from "axios";

const API_BASE_URL = "http://localhost:1337";

export const api = axios.create({
  baseURL: API_BASE_URL,
});
