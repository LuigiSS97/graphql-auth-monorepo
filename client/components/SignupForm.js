import React, { useState } from "react";
import AuthForm from "./AuthForm";
import mutation from "../mutations/Signup";
import { graphql } from "react-apollo";
import query from "../queries/CurrentUser";

function SignupForm({ mutate }) {
  const [errors, setErrors] = useState([]);

  const onSubmit = ({ email, password }) => {
    mutate({
      variables: { email, password },
      refetchQueries: [{ query }],
    }).catch((res) => {
      const errors = res.graphQLErrors.map((error) => error.message);
      setErrors(errors);
    });
  };

  return (
    <div>
      <h3>Sign up</h3>
      <AuthForm onSubmit={onSubmit} errors={errors} />
    </div>
  );
}

export default graphql(mutation)(SignupForm);
