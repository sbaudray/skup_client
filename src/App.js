import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login.page";
import Home from "./Home.page";
import { UserProvider } from "./User.context";
import ConnectedUser from "./ConnectedUser.route";
import GlobalStyles from "./GlobalStyles";
import RelayEnvironment from "./RelayEnvironment";
import {
  RelayEnvironmentProvider,
  graphql,
  useLazyLoadQuery
} from "react-relay/hooks";

class ErrorBoundary extends React.Component {
  state = {
    error: null
  };

  static getDerivedStateFromError(error) {
    return {
      error
    };
  }

  render() {
    if (this.state.error !== null) {
      return (
        <div>
          <div>Error: {this.state.error.message}</div>
          <div>
            <pre>{JSON.stringify(this.state.error.source, null, 2)}</pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function Test() {
  const data = useLazyLoadQuery(
    graphql`
      query AppQuery {
        allQuotes {
          author
          content
        }
      }
    `
  );

  return <div>{JSON.stringify(data)}</div>;
}

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <UserProvider>
        <ErrorBoundary>
          <Suspense fallback={"Loading !!!"}>
            <Test />
          </Suspense>
        </ErrorBoundary>
        {/* <Router> */}
        {/*   <Switch> */}
        {/*     <Route path="/login"> */}
        {/*       <Login /> */}
        {/*     </Route> */}
        {/*     <ConnectedUser path="/"> */}
        {/*       <Home /> */}
        {/*     </ConnectedUser> */}
        {/*   </Switch> */}
        {/* </Router> */}
        <GlobalStyles />
      </UserProvider>
    </RelayEnvironmentProvider>
  );
}

export default App;
