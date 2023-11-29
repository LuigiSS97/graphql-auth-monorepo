import React from "react";
import AuthForm from "./AuthForm";
import mutation from "../mutations/Login";
import { graphql } from "react-apollo";

function LoginForm({ mutate }) {
  const onSubmit = ({ email, password }) => {
    mutate({
      variables: { email, password },
    });
  };

  return (
    <div>
      <h3>Log in</h3>
      <AuthForm onSubmit={onSubmit} />
    </div>
  );
}

export default graphql(mutation)(LoginForm);
