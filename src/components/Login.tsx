import React, { useState } from "react";

import { useForm } from "./UserForm";

const Login = () => {
  // defining the initial state for the form
  const initialState = {
    email: "bluebill1049@hotmail.com",
    password: "1234567",
  };

  // getting the event handlers from our custom hook
  const { onChange, onSubmit, values } = useForm(
    loginUserCallback,
    initialState
  );

  // a submit function that will execute upon form submission
  async function loginUserCallback() {
    // send "values" to database
    console.log("callback called!");
  }

  return (
    // don't mind this ugly form :P
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          onChange={onChange}
          required
          defaultValue={initialState.email}
        />

        <input
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          onChange={onChange}
          required
          defaultValue={initialState.password}
        />
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
