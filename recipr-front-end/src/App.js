import "./App.css";
import ShowSearchbar from "./components/searchbar/searchbar";
import Homepage from "./pages/Home/index";
import AppContext, { MyContext } from "./context";
import ShowNav from "./components/Navbar/navbar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import React, { useContext, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import axios from "./Axios";

function App() {
  const { user, setUser } = useContext(MyContext);
  useEffect(() => {
    axios.post("/auto-login")
    .then(({ data }) => setUser(data));
  }, []);
  return (
    <Router>
      <ShowNav />
      <Switch>
        <Route exact path="/">
          <ShowSearchbar />
          <Homepage />
        </Route>
        {!user && (
          <Route exact path="/login">
            <Login />
          </Route>
        )}
        {!user && (
          <Route exact path="/signup">
            <Signup />
          </Route>
        )}
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
