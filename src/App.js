import React, { useState } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Auth2 from "./Auth2";
import "./App.css";

import Login from "./Login";
import Register from "./Register";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Auth2 />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
export default App;
