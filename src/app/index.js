import React, { useCallback } from "react";
import Layout from "../components/layout";
import LoginForm from "../components/login-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/authSlice";
import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Main from "./main";

function App() {
  const dispatch = useDispatch();

  const select = useSelector((state) => ({
    token: state.auth.token,
    loading: state.auth.loading,
  }));

  return (
    <Routes>
      <Route path={""} element={<Main />} />
      <Route path={"/login"} element={<Login />} />
    </Routes>
  );
}

export default App;
