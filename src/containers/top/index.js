import React, { useCallback } from "react";
import LayoutFlex from "../../components/layout-flex";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";

function TopContainer() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const select = useSelector((state) => ({
    exists: state.auth.exists,
  }));

  const callbacks = {
    // Переход к авторизации
    onSignIn: useCallback(() => {
      navigate("/login", { state: { back: location.pathname } });
    }, [location.pathname]),

    // Отмена авторизации
    onSignOut: useCallback(() => {
      dispatch(logout());
    }, [location.pathname]),
  };

  return (
    <LayoutFlex flex="end" indent="small">
      {select.exists ? (
        <button onClick={callbacks.onSignOut}>Выйти</button>
      ) : (
        <button onClick={callbacks.onSignIn}>Войти</button>
      )}
    </LayoutFlex>
  );
}

export default React.memo(TopContainer);
