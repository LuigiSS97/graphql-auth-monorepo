import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";

import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import { Router, hashHistory, Route, IndexRoute } from "react-router";
import App from "./components/App";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { InMemoryCache } from "@apollo/client";
import Dashboard from "./components/Dashboard";

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  networkInterface: new HttpLink({
    uri: "/graphql",
    opts: {
      credentials: "same-origin",
    },
  }),
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/dashboard" component={Dashboard} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
