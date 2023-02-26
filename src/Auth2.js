import { useState } from "react";
import { useNavigate, Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";
import Login from "./Login";
import Register from "./Register";

const Auth2 = (props) => {
  const [currentForm, setCurrentForm] = useState("login");
  const [count, setCount] = useState(0);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <div className="App">
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </>
  );
};

export default Auth2;
