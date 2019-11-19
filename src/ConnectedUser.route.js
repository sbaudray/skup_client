import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserState } from "./User.context";

function ConnectedUser({ children, ...rest }) {
  const user = useUserState();
  console.log({ user });

  return (
    <Route
      {...rest}
      render={() => (user.loggedIn ? children : <Redirect to="/login" />)}
    />
  );
}

export default ConnectedUser;
