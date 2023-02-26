import React, { useState } from "react";

import { Route, useNavigate } from "react-router-dom";

import api from "./api/users";

const Login = (props) => {
  const navigate = useNavigate();

  const INITIAL_STATE = {
    email: "",
    pass: "",
  };

  const [form, setForm] = useState([INITIAL_STATE]);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form.email);

    try {
      const response = await api.get("/users/filter/" + form.email);
      console.log(response.data);
      console.log(response);
      console.log(response.data[0].id);

      navigate("/home", { state: { id: response.data[0].id } });
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <>
      {" "}
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <input
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="pass">password</label>
          <input
            value={form.pass}
            onChange={handleChange}
            type="pass"
            placeholder="********"
            id="pass"
            name="pass"
          />
          <button type="submit">Log In</button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
    </>
  );
};

export default Login;
