import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import { DataTableExample } from "./datatable_example";
import api from "./api/users";
const Home = (props) => {
  const location = useLocation();
  const [user, setUser] = useState([]);
  /*{
      id: "",
      checked: false,
      username: "",
      password: "",
    });*/
  useEffect(() => {
    try {
      console.log(location.state);
      api.get("/users/" + location.state.id).then((res) => {
        console.log(res);
        setUser({
          id: res.data.id,
          checked: Boolean(res.data.checked),
          username: res.data.username,
          password: res.data.password,
        });
        console.log(user);
      });
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }, []);

  return (
    <>
      <header>welcome to user:{user.username}</header>
      <DataTableExample />
      <footer>
        <Link to={"/"}>Logout</Link>
      </footer>
    </>
  );
};
export default Home;
