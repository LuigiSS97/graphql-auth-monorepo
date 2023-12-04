import React, { useEffect, useRef } from "react";
import { graphql } from "react-apollo";
import CurrentUser from "../queries/CurrentUser";
import { compose } from "recompose";
import { hashHistory } from "react-router";

function RequireAuth(WrappedComponent) {
  function AuthComponent(props) {
    const prevProps = useRef(props);

    useEffect(() => {
      if (prevProps !== props) {
        if (!props.data.loading && !props.data.user) {
          hashHistory.push("/login");
        }
      }
      prevProps.current = props;
    });

    return <WrappedComponent {...props} />;
  }

  return compose(graphql(CurrentUser))(AuthComponent);
}

export default RequireAuth;
