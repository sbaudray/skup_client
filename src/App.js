import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login.page";
import Home from "./Home.page";
import { UserProvider } from "./User.context";
import ConnectedUser from "./ConnectedUser.route";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <ConnectedUser path="/">
            <Home />
          </ConnectedUser>
        </Switch>
      </Router>
      <GlobalStyles />
    </UserProvider>
  );
}

export default App;
