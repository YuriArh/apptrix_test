import React, { useState } from "react";
import { cn as bem } from "@bem-react/classname";
import "./style.css";
import propTypes from "prop-types";

function LoginForm({ onLogin, error }) {
  const cn = bem("LoginForm");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className={cn()}>
      <h2>Войти</h2>
      <form onSubmit={handleSubmit}>
        <div className={cn("prop")}>
          <label>Логин</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={cn("prop")}>
          <label>Пароль</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        {error && <div className={cn("error")}>Ошибка</div>}
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  onLogin: propTypes.func.isRequired,
};

LoginForm.defaultProps = {};

export default React.memo(LoginForm);
