import React from "react";
import { Redirect } from "react-router-dom";
import { useUserDispatch, useUserState } from "./User.context";
import LabeledInput from "./LabeledInput.ui";

function Login() {
  const user = useUserState();
  const userDispatch = useUserDispatch();
  const [googleLoggedIn, setGoogleLoggedIn] = React.useState(false);

  React.useEffect(() => {
    window.onSignIn = function onSignIn(user) {
      if (user) {
        setGoogleLoggedIn(true);
        userDispatch({ type: "LOGGED_IN", name: "HK" });
      }

      const id_token = user.getAuthResponse().id_token;
    };
  }, []);

  if (user.loggedIn || googleLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="root">
      <div className="g-signin2" data-onsuccess="onSignIn" />
      <style jsx>
        {`
          .root {
            align-items: center;
            display: flex;
            height: 100%;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
}

export default Login;
