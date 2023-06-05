import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import { DataTableExample } from "./datatable_example";
import api from "./api/users";
import Headers from "./components/Headers";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import FirstComponent from "./components/FirstComponent";
import UserComponent from "./components/UserComponent";
import ExampleUserForm from "./components/ExampleUserForm";
import Login from "./components/Login";
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
      <main>
        <header>welcome to user:{user.username}</header>

        <Headers />

        <DataTableExample />
        <FirstComponent />
        <UserComponent
          name="John Doe"
          age={26}
          address="87 Summer St, Boston, MA 02110"
          dob={new Date()}
        />
        <ExampleUserForm />
        <footer>
          <Counter />
          <Counter2 />
          <Login />
          <Link to={"/"}>Logout</Link>
        </footer>
      </main>
    </>
  );
};
export default Home;
