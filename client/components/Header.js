import React from "react";
import { graphql } from "react-apollo";
import query from "../queries/CurrentUser";
import { Link } from "react-router";
import mutation from "../mutations/Logout";

function Header(props) {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">
          <Buttons properties={props} />
        </ul>
      </div>
    </nav>
  );
}

const Buttons = ({ properties }) => {
  const {
    data: { loading, user },
    mutate,
  } = properties;

  const onLogout = () => {
    mutate({ refetchQueries: [{ query }] });
  };

  if (loading) return <div />;

  if (user) {
    return (
      <li>
        <a onClick={onLogout}>Logout</a>
      </li>
    );
  } else {
    return (
      <div>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </div>
    );
  }
};

export default graphql(mutation)(graphql(query)(Header));
