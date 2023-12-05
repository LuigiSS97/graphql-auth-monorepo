import React from "react";

import { graphql } from "react-apollo";

import CurrentUser from "../queries/CurrentUser";

function RequireAuth(WrappedComponent) {
  return graphql(CurrentUser)((props) => {
    const { user, loading } = props.data;

    if (user && !loading) {
      return <WrappedComponent {...props} />;
    }
    return (
      <div>
        <h3>You must be logged in to view this page</h3>
      </div>
    );
  });
}

export default RequireAuth;
