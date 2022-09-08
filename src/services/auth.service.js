import axios from "axios";
const API_URL = "http://erp.apptrix.ru/api/token/";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
  proxy: {
    host: "localhost",
    port: 3000,
  },
};
const login = (username, password) => {
  return axios
    .post(
      API_URL,
      {
        username,
        password,
      },
      config
    )
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem("user", JSON.stringify(response.data.access));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout,
};
export default authService;
