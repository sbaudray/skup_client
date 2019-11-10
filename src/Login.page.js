import React from "react";
import { Redirect } from "react-router-dom";
import { useUserDispatch, useUserState } from "./User.context";

function Login() {
  const user = useUserState();
  const userDispatch = useUserDispatch();

  if (user.loggedIn) {
    return <Redirect to="/home" />;
  }

  function login(event) {
    event.preventDefault();

    userDispatch({ type: "LOGGED_IN", name: "HK" });
  }

  return (
    <div>
      <form onSubmit={login}>
        <input type="email" />
        <input type="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
