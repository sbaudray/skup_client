import React from "react";
import { Redirect } from "react-router-dom";
import { useUserDispatch, useUserState } from "./User.context";
import LabeledInput from "./LabeledInput.ui";

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
    <div className="root">
      <form className="form" onSubmit={login}>
        <LabeledInput label="Email:" type="email" />
        <LabeledInput label="Password:" type="password" />
        <button>Login</button>
      </form>
      <style jsx>
        {`
          .root {
            align-items: center;
            display: flex;
            height: 100%;
            justify-content: center;
          }

          .form {
            border-radius: 4px;
            box-shadow: 0 0 15px -2px lightgrey;
            display: grid;
            gap: 20px;
            padding: 80px 40px;
          }
        `}
      </style>
    </div>
  );
}

export default Login;
