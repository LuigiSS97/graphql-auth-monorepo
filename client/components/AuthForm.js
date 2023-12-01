import React, { useState } from "react";

const initialFormState = { email: "", password: "" };

function AuthForm({ onSubmit, errors }) {
  const [form, setForm] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
    setForm(initialFormState);
  };

  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="col s6">
        <div className="input-field">
          <input
            placeholder="Email"
            value={form.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Password"
            type="password"
            value={form.password}
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <ul className="errors" style={{ color: "red" }}>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
