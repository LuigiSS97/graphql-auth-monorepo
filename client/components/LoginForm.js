import React, { useState } from "react";
import AuthForm from "./AuthForm";
import mutation from "../mutations/Login";
import { graphql } from "react-apollo";
import query from "../queries/CurrentUser";
import { hashHistory } from "react-router";

function LoginForm({ mutate }) {
  const [errors, setErrors] = useState([]);

  const onSubmit = ({ email, password }) => {
    mutate({
      variables: { email, password },
      refetchQueries: [{ query }],
    })
      .then(() => {
        hashHistory.push("/dashboard");
      })
      .catch((res) => {
        const errors = res.graphQLErrors.map((error) => error.message);
        setErrors(errors);
      });
  };

  return (
    <div>
      <h3>Log in</h3>
      <AuthForm onSubmit={onSubmit} errors={errors} />
    </div>
  );
}

export default graphql(query)(graphql(mutation)(LoginForm));
