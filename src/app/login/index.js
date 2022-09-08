import React, { useCallback, useState } from "react";
import Layout from "../../components/layout";
import LayoutFlex from "../../components/layout-flex";
import TopContainer from "../../containers/top";
import ToolsContainer from "../../containers/tools";
import LoginForm from "../../components/login-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/authSlice";
import Tools from "../../containers/tools";

function Login() {
  const dispatch = useDispatch();

  const callbacks = {
    onLogin: useCallback((username, password) => {
      console.log(username, password);
      dispatch(login({ username, password }));
    }, []),
  };

  const select = useSelector((state) => ({
    token: state.auth.token,
    loading: state.auth.loading,
  }));

  return (
    <Layout>
      <ToolsContainer />
      <LoginForm onLogin={callbacks.onLogin} />
    </Layout>
  );
}

export default React.memo(Login);
