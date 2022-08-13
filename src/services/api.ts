import axios from "axios";

const api = axios.create({
  baseURL: "https://62f49a40ac59075124c03a25.mockapi.io/",
});

export default api;
