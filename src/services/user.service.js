import axios from "axios";
import authHeader from "./auth-header";
const API_URL =
  "https://www.jetbrains.com/help/youtrack/devportal/api-fields-syntax.html#samples";
const getUserBoard = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

const userService = {
  getUserBoard,
};
export default userService;
