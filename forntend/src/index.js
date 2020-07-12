import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import * as serviceWorker from "./serviceWorker";
import Root from "./Root";
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import Auth from "./components/Auth/index";
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql/",
  fetchOptions: {
    credentials: "include",
  },
  request: (operation) => {
    const token = localStorage.getItem("authToken") || "";
    operation.setContext({
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
  },
  clientState: {
    defaults: {
      isLoggedIn: !!localStorage.getItem("authToken"),
    },
  },
});
const IS_LOGGED_IN_QUERY = gql`
  query {
    isLoggedIn @client
  }
`;
ReactDOM.render(
  <ApolloProvider client={client}>
    <Query query={IS_LOGGED_IN_QUERY}>
      {({ data }) => (data.isLoggedIn ? <Root /> : <Auth />)}
    </Query>
  </ApolloProvider>,
  document.getElementById("root"),
);
